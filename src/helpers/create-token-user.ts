import jwt from "jsonwebtoken";
import { IUser } from "../interfaces/IUser";

export async function createUserToken(userLogin: IUser) {
  const token = jwt.sign(
    {
      email: userLogin.email,
      id: userLogin._id.toString(),
    },
    "secret-key",
    {
      expiresIn: "1h",
    }
  );

  return token;
}
