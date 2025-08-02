import { NextFunction, Request, Response } from "express";
import { AuthService } from "../services/AuthService";
import { CreateUserDto } from "../dtos/CreateUser.dto";
import { LoginUserDto } from "../dtos/LoginUser.dto";
import { getUserByToken } from "../helpers/get-user-by-token";
import { UpdateUserDto } from "../dtos/UpdateUser.dto";
import { AppError } from "../errors/AppError";

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

  async update(req: Request, res: Response, next: NextFunction) {
    const { name, email, password } = req.body;

    const dataUser: UpdateUserDto = {
      name,
      email,
      password
    }

    const user = getUserByToken(req);
    const id = user?.id;
    
    if(!id) {
      throw new AppError('ID not provided in token.');
    }
    
    try {
      const updateUser = await this.authService.update(id, dataUser);
      return res.status(200).json({ name: updateUser?.name, email: updateUser?.email })
    } catch (error) {
      next(error);
    }
  }
}