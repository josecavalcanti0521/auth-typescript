import { ICrud } from "../interfaces/ICrud";
import { IUser } from "../interfaces/IUser";
import User from "../models/User";
import { CreateUserDto } from "../schemas/userSchemas";

export class UserRepository implements ICrud<CreateUserDto, IUser> {
  async create(data: CreateUserDto): Promise<IUser | null> {
    const user = new User(data);

    const savedUser = await user.save();

    if(!savedUser) return null;

    return savedUser;
  }
}
