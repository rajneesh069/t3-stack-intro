import z from "zod";

export const createTodoSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  done: z.boolean().default(false),
});

export const updateTodoSchema = z.object({
  id: z.string().uuid(),
  userId: z.string().cuid(),
  title: z.string(),
  description: z.string().optional(),
  done: z.boolean(),
});

export type CreateTodoSchema = z.infer<typeof createTodoSchema>;
export type UpdateTodoSchema = z.infer<typeof updateTodoSchema>;
