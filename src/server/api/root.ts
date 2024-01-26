import { doctorRouter } from "./routers/doctor.router"
import { createTRPCRouter } from "~/server/api/trpc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  doctor: doctorRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
