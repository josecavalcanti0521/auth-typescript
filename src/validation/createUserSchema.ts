import { z } from "zod";

export const createUserSchema = z.object({
  name: z
    .string({ message: "Username must be a string" })
    .min(1, "Name is required"),
  email: z
    .email({ message: "Invalid email address" })
    .min(1, { message: "Email is required" })
    .trim(),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" }),
});
