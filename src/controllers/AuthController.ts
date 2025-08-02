import { NextFunction, Request, Response } from "express";
import { AuthService } from "../services/AuthService";
import { CreateUserDto } from "../dtos/CreateUser.dto";
import { LoginUserDto } from "../dtos/LoginUser.dto";

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

  async login(req: Request, res: Response, next: NextFunction) {
    const { email, password } = req.body;

    const dataLogin: LoginUserDto = {
      email,
      password
    }

    try {
      const userLogin = await this.authService.login(dataLogin);
      return res.status(200).json({ id: userLogin?.id, token: userLogin?.token });
    } catch (error) {
      next(error);
    }
  }
}