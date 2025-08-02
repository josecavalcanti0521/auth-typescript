import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/AppError";
import jwt, { JwtPayload } from "jsonwebtoken";

export async function verifyAuth(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new AppError("Token is missing or badly formatted.", 401);
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, "secret-key") as JwtPayload;

    if (!decoded) {
      throw new AppError("Token payload is invalid.", 401);
    }

    req.user = decoded;
    next();
  } catch (error) {
    throw new AppError("Invalid or expired token.", 401);
  }
}
