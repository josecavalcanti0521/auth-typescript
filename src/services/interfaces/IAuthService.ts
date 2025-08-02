import { CreateUserDto } from "../../dtos/CreateUser.dto";
import { LoginUserDto } from "../../dtos/LoginUser.dto";
import { IUser } from "../../interfaces/IUser";

export interface IAuthService {
  register(dataUser: CreateUserDto): Promise<IUser | null>;
  login(dataLogin: LoginUserDto): Promise<{token: string, id: string} | null>;
}