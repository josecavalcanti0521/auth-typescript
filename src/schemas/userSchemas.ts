import { z } from "zod";

export const createUserSchema = z.object({
  name: z.string().min(1, "Name is required").trim(),
  email: z
    .email({ message: "Invalid email address" })
    .min(1, { message: "Email is required" })
    .trim(),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" }),
});

export type CreateUserDto = z.infer<typeof createUserSchema>