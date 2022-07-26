import * as trpc from "@trpc/server";
import { z } from "zod";
import { prisma } from "../utils/prisma";

export const appRouter = trpc
  .router()
  .query("ideas", {
    async resolve() {
      return {
        items: await prisma.idea.findMany({}),
      };
    },
  })
  .mutation("addIdea", {
    input: z.object({
      title: z.string().min(2),
      description: z.string().nullable(),
    }),
    async resolve({ input: { title, description } }) {
      const idea = await prisma.idea.create({
        data: { title, description },
      });
      return idea;
    },
  })
  .mutation("deleteIdea", {
    input: z.object({
      id: z.number(),
    }),
    async resolve({ input: { id } }) {
      const idea = await prisma.idea.delete({
        where: { id },
      });
      return idea;
    },
  });

// export type definition of API
export type AppRouter = typeof appRouter;
