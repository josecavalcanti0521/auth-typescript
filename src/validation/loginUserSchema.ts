import z from "zod";

export const loginUserChema = z.object({
  email: z.email({ message: "Invalid email." }),
  password: z
    .string("The password must be a string.")
    .min(8, { message: "The password must be at least 8 characters long." }),
});
