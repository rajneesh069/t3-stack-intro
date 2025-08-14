import { z } from "zod";

export const addTodoSchema = z.object({
  title: z
    .string()
    .min(2, {
      message: "Title must be at least 2 characters.",
    })
    .max(50, {
      message: "Title must not exceed 50 characters.",
    }),
  description: z
    .string()
    .min(5, {
      message: "Description must be at least 5 characters.",
    })
    .max(250, {
      message: "Description must not exceed 250 characters.",
    })
    .optional(),
  done: z.boolean().default(false).optional(),
  priority: z.enum(["URGENT", "TODAY", "TOMORROW"], {
    required_error: "Please select a priority.",
  }),
});

export const updateTodoSchema = z.object({
  id: z.string().uuid(),
  userId: z.string().cuid(),
  title: z.string(),
  description: z.string().optional(),
  done: z.boolean(),
});

export type AddTodoSchema = z.infer<typeof addTodoSchema>;
export type UpdateTodoSchema = z.infer<typeof updateTodoSchema>;
