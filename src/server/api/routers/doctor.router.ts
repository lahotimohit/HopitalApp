import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { generate } from 'generate-password'
import { TRPCError } from "@trpc/server";
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";
import { env } from "~/env";
import { sendMail } from "~/utils/mail";

const createDoctorValidator = z.object({
    name: z.string(), 
    email: z.string().email(), 
    specialites: z.array(z.string()), 
    address: z.string(),
    studyDetails: z.string()
});

const loginDoctorValidator = z.object({
    id: z.number(), 
    password: z.string()
})

export const doctorRouter = createTRPCRouter({
    createDoctor: publicProcedure.input(createDoctorValidator).mutation(async ({ ctx, input }) => {
        const randomPassword = generate({
            length: 12
        });
        console.log(`Generated Password: ${randomPassword}`);
        const hashedPassword = await bcrypt.hash(randomPassword, 10);
        const doctor = await ctx.db.doctor.create({
            data: {
                name: input.name, 
                study_details: input.studyDetails, 
                password: hashedPassword
            }
        });

        sendMail(input.email, "Here are your credentials for HOPITAL", `userId: ${doctor.doctorId}, password: ${randomPassword}`)

        return {
            id: doctor.doctorId, 
            name: doctor.name
        }
    }),
    doctorLogin: publicProcedure.input(loginDoctorValidator).mutation(async ({ctx, input}) => {
        const res = await ctx.db.doctor.findUnique({
            where: {
                doctorId: input.id
            },
            select: {
                password: true, 
                doctorId: true
            }
        });

        if (!res) {
            return new TRPCError({ code: "NOT_FOUND" });
        }

        const isValid = await bcrypt.compare(res.password, input.password);

        if (!isValid) {
            return new TRPCError({ code: "UNAUTHORIZED" });
        }

        const token = jwt.sign(`${res.doctorId}`, env.JWT_SECRET, {expiresIn: "1h"});
        return token;
    })
})