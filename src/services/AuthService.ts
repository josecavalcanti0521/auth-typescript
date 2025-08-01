import { IUser } from "../interfaces/IUser";
import { UserRepository } from "../repositories/UserRepository";
import bcrypt from 'bcrypt';
import { IAuthService } from "./interfaces/IAuthService";
import { CreateUserDto } from "../dtos/CreateUser.dto";
import { LoginUserDto } from "../dtos/LoginUser.dto";
import { AppError } from "../errors/AppError";

export class AuthService implements IAuthService{
  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  async register(data: CreateUserDto): Promise<IUser | null> {
    const userExists = await this.userRepository.findByEmail(data.email);

    if(userExists) {
      throw new AppError('Email já utilizado, por favor utilize outro email.', 404);
    };

    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(data.password, salt);

    const userData: CreateUserDto = {
      email: data.email,
      name: data.name,
      password: hashPassword
    }

    const user = await this.userRepository.create(userData);
    
    return user;
  }
}