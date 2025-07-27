import { IUser } from "../interfaces/IUser";
import { UserRepository } from "../repositories/UserRepository";
import { CreateUserDto } from "../schemas/userSchemas";
import bcrypt from 'bcrypt';

export class AuthService {
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

    try {
      const user = await this.userRepository.create(userData)
      return user;
    } catch(error) {
      throw new Error('Error when creating user')
    }
  }
}