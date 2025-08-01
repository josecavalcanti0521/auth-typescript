import { CreateUserDto } from "../../dtos/CreateUser.dto";
import { IUser } from "../../interfaces/IUser";

export interface IAuthService {
  register(dataUser: CreateUserDto): Promise<IUser | null>;
}