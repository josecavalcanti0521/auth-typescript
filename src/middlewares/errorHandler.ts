import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/AppError";

export function errorHandler(error: Error | AppError, req: Request, res: Response, next: NextFunction) {
  const statusCode = error instanceof AppError ? error.statusCode : 500;

  const message = error instanceof AppError ? error.message : "An internal server error occurred. Please try again later.";

  console.error(error);
  
  res.status(statusCode).json({ status: "error", message });
}
