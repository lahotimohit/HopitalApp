import { db } from "~/server/db";
import jwt from "jsonwebtoken";
import { env } from "~/env";
import { TRPCError } from "@trpc/server";

export const checkAuth = async ({ token }: { token: string }) => {
  const userId = jwt.verify(token, env.JWT_SECRET);

  const user = await db.doctor.findUnique({
    where: {
      doctorId: +userId,
    },
    select: {
        email: true, 
        emailVerified: true, 
        doctorId: true, 
        name: true, 
        image: true
    }
  });

  if (!user) {
    return new TRPCError({ code: "FORBIDDEN" });
  }

  if (!user.emailVerified) {
    return new TRPCError({ code: "FORBIDDEN" });
  }

  return { name: user.name, doctorId: user.doctorId, email: user.email, image: user.image };
};
