import { CreateUserDto } from "../dtos/CreateUser.dto";
import { IUser } from "../interfaces/IUser";
import User from "../models/User";
import { IUserRepository } from "./interfaces/IUserRepository";

export class UserRepository implements IUserRepository {
  async create(dataUser: CreateUserDto): Promise<IUser | null> {
    const userInstance = new User(dataUser);

    const savedUser = (await userInstance.save());
    
    if(!savedUser) return null;

    return savedUser;
  }
}
