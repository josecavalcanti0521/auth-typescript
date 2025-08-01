import { IUser } from "../../interfaces/IUser";
import { CreateUserDto } from "../../schemas/userSchemas";

export interface IUserRepository {
  create(dataUser: CreateUserDto): Promise<IUser | null>;
}