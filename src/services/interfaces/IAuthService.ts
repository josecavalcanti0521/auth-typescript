import { CreateUserDto } from "../../dtos/CreateUser.dto";
import { LoginUserDto } from "../../dtos/LoginUser.dto";
import { UpdateUserDto } from "../../dtos/UpdateUser.dto";
import { IUser } from "../../interfaces/IUser";

export interface IAuthService {
  register(dataUser: CreateUserDto): Promise<IUser | null>;
  login(dataLogin: LoginUserDto): Promise<{id: string, token: string} | null>;
  update(id: string, dataUser: UpdateUserDto): Promise<IUser | null>
}