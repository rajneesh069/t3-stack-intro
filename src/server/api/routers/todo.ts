import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";
import { TRPCError } from "@trpc/server";

export const todoRouter = createTRPCRouter({
  getAllTodos: protectedProcedure.query(async ({ ctx }) => {
    const allTodos = await ctx.db.todo.findMany({
      where: {
        userId: ctx.session.user.id,
      },
    });
    return allTodos;
  }),
  addTodo: protectedProcedure
    .input(
      z.object({
        title: z.string(),
        description: z.string().optional(),
        done: z.boolean(),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      const userId = ctx.session.user.id;
      return await ctx.db.todo.create({
        data: { ...input, userId },
      });
    }),

  getTodo: protectedProcedure
    .input(z.object({ todoId: z.string().uuid() }))
    .query(async ({ input, ctx }) => {
      return await ctx.db.todo.findMany({
        where: {
          id: input.todoId,
          userId: ctx.session.user.id,
        },
      });
    }),

  updateTodo: protectedProcedure
    .input(
      z.object({
        todoId: z.string().uuid(),
        todo: z.object({
          title: z.string(),
          description: z.string(),
          done: z.boolean(),
        }),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      const userId = ctx.session.user.id;
      const result = await ctx.db.todo.updateManyAndReturn({
        where: {
          id: input.todoId,
          userId,
        },
        data: input.todo,
      });

      if (result.length === 0) {
        throw new TRPCError({
          message: "Todo not found!",
          code: "BAD_REQUEST",
        });
      }

      return { data: result[0] };
    }),

  deleteTodo: protectedProcedure
    .input(
      z.object({
        todoId: z.string().uuid(),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      const userId = ctx.session.user.id;

      const { count } = await ctx.db.todo.deleteMany({
        where: {
          id: input.todoId,
          userId,
        },
      });

      if (count === 0) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "Todo not found!!",
        });
      }

      return { success: true };
    }),
});
