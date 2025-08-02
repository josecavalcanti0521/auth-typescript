import { CreateUserDto } from "../../dtos/CreateUser.dto";
import { UpdateUserDto } from "../../dtos/UpdateUser.dto";
import { IUser } from "../../interfaces/IUser";

export interface IUserRepository {
  create(dataUser: CreateUserDto): Promise<IUser>;
  update(id: string, dataUser: UpdateUserDto): Promise<IUser | null>;
  findById(id: string): Promise<IUser | null>;
  findByEmail(email: string): Promise<IUser | null>;
}