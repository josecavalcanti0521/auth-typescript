import { NextFunction, Request, Response } from "express";
import { AuthService } from "../services/AuthService";
import { CreateUserDto } from "../dtos/CreateUser.dto";

export class AuthController {
  private authService: AuthService;

  constructor(authService: AuthService) {
    this.authService = authService;
  }

  async register(req: Request, res: Response, next: NextFunction) {
    const { name, email, password } = req.body;

    const dataUser: CreateUserDto = {
      name,
      email,
      password
    }

    try {
      const user = await this.authService.register(dataUser);
      return res.status(201).json({ name: user?.name, email: user?.email });
    } catch (error) {
      next(error);
    }
  }
}