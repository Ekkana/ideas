import * as trpc from "@trpc/server";
import { z } from "zod";
import { prisma } from "../utils/prisma";

export const appRouter = trpc.router().query("ideas", {
  async resolve() {
    return {
      items: await prisma.idea.findMany({}),
    };
  },
});

// export type definition of API
export type AppRouter = typeof appRouter;
