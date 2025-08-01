import { IUser } from "../interfaces/IUser";
import User from "../models/User";
import { CreateUserDto } from "../schemas/userSchemas";
import { IUserRepository } from "./interfaces/IUserRepository";

export class UserRepository implements IUserRepository {
  async create(data: CreateUserDto): Promise<IUser | null> {
    const user = new User(data);

    const savedUser = await user.save();

    if(!savedUser) return null;

    return savedUser;
  }
}
