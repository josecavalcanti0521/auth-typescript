import { Request } from "express";

export function getUserByToken(
  req: Request
): { id: string; email: string } | null {
  const user = req.user;

  if (user && typeof user !== "string") {
    if (typeof user.id === "string") {
      return { id: user.id, email: user.email };
    }
  }

  return null;
}
