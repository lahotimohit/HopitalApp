import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { generate } from "generate-password";
import { TRPCError } from "@trpc/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { env } from "~/env";
import { sendMail } from "~/utils/mail";

const createDoctorValidator = z.object({
  email: z.string(), 
  mobile_no: z.string()
});

const loginDoctorValidator = z.object({
  id: z.number(),
  password: z.string(),
});

const findDoctorValidator = z.object({
  id: z.number(),
});

export const doctorRouter = createTRPCRouter({
  createDoctor: publicProcedure
    .input(createDoctorValidator)
    .mutation(async ({ ctx, input }) => {
      const randomPassword = generate({
        length: 12,
      });
      const verificationToken = generate({
        length: 15
      });
      console.log(`Generated Password: ${randomPassword}`);
      const hashedPassword = await bcrypt.hash(randomPassword, 10);
      const doctor = await ctx.db.doctor.create({
        data: {
          mobileNo: input.mobile_no,
          email: input.email,
          password: hashedPassword, 
          verificationToken: verificationToken
        },
      });

      sendMail(
        input.email,
        "Click on the link below to verify your account",
        `${env.NEXTAUTH_URL}/verify?token=${verificationToken}`,
      );

      return {
        id: doctor.doctorId,
      };
    }),
  doctorLogin: publicProcedure
    .input(loginDoctorValidator)
    .mutation(async ({ ctx, input }) => {
      const res = await ctx.db.doctor.findUnique({
        where: {
          doctorId: input.id,
        },
        select: {
          password: true,
          doctorId: true,
        },
      });

      if (!res) {
        return new TRPCError({ code: "NOT_FOUND" });
      }

      const isValid = await bcrypt.compare(res.password, input.password);

      if (!isValid) {
        return new TRPCError({ code: "UNAUTHORIZED" });
      }

      const token = jwt.sign(`${res.doctorId}`, env.JWT_SECRET, {
        expiresIn: "1h",
      });
      return token;
    }),
  findDoctor: publicProcedure
    .input(findDoctorValidator)
    .query(async ({ ctx, input }) => {
      const doctor = await ctx.db.doctor.findUnique({
        where: {
          doctorId: input.id,
        },
        select: {
            email: true, 
            doctorDetails: true, 
            // TODO: Also fetch description from the db
            // description: true
        }
      });

      if (!doctor) {
        return new TRPCError({ code: "NOT_FOUND" });
      }

      return doctor;
    }),
});
