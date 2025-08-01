import { IUser } from "../interfaces/IUser";
import { UserRepository } from "../repositories/UserRepository";
import bcrypt from 'bcrypt';
import { IAuthService } from "./interfaces/IAuthService";
import { CreateUserDto } from "../dtos/CreateUser.dto";

export class AuthService implements IAuthService{
  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  async register(data: CreateUserDto): Promise<IUser | null> {
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