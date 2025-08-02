import { IUser } from "../interfaces/IUser";
import { UserRepository } from "../repositories/UserRepository";
import { IAuthService } from "./interfaces/IAuthService";
import { CreateUserDto } from "../dtos/CreateUser.dto";
import { LoginUserDto } from "../dtos/LoginUser.dto";
import { AppError } from "../errors/AppError";
import { createUserToken } from "../helpers/create-token-user";
import bcrypt from 'bcrypt';

export class AuthService implements IAuthService{
  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  async register(data: CreateUserDto): Promise<IUser | null> {
    const userExists = await this.userRepository.findByEmail(data.email);

    if(userExists) {
      throw new AppError('Email already used, please use another email.', 404);
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

  async login(dataLogin: LoginUserDto): Promise<{ id: string, token: string } | null> {
    const userExists = await this.userRepository.findByEmail(dataLogin.email);
    if(!userExists) {
      throw new AppError('Email not found.', 404);
    }
    
    const checkPassword = await bcrypt.compare(dataLogin.password, userExists.password);
    
    if(!checkPassword) {
      throw new AppError('Invalid password.', 404);
    }

    const token = await createUserToken(userExists);
    const id = userExists._id.toString();

    return { token, id }
  }
}