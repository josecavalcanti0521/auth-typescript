import { Request, Response } from "express";
import { AuthService } from "../services/AuthService";
import { CreateUserDto } from "../schemas/userSchemas";

export class AuthController {
  private authService: AuthService;

  constructor(authService: AuthService) {
    this.authService = authService;
  }

  async register(req: Request, res: Response) {
    const { name, email, password } = req.body;

    const dataUser: CreateUserDto = {
      name,
      email,
      password
    }

    try {
      const user = this.authService.register(dataUser)
      return res.status(201).json(user)
    } catch (error: any) {
      return res.status(404).json({ error: error.message })
    }
  }
}