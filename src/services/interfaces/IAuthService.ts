import { IUser } from "../../interfaces/IUser";
import { CreateUserDto } from "../../schemas/userSchemas";

export interface IAuthService {
  register(dataUser: CreateUserDto): Promise<IUser | null>;
}