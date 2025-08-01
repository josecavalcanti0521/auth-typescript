import { CreateUserDto } from "../../dtos/CreateUser.dto";
import { IUser } from "../../interfaces/IUser";

export interface IUserRepository {
  create(dataUser: CreateUserDto): Promise<IUser | null>;
}