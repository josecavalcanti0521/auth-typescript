import { CreateUserDto } from "../dtos/CreateUser.dto";
import { IUser } from "../interfaces/IUser";
import User from "../models/User";
import { IUserRepository } from "./interfaces/IUserRepository";

export class UserRepository implements IUserRepository {
  async create(dataUser: CreateUserDto): Promise<IUser> {
    const userInstance = new User(dataUser);

    const savedUser = (await userInstance.save());
    return savedUser;
  }

  async findByEmail(email: string): Promise<IUser | null> {
    const user = await User.findOne({ email }).lean<IUser>();

    return user ? user : null;
  }
}
