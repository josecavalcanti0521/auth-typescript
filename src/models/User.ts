import { Schema } from "mongoose";
import mongoose from "../db/connection";
import { IUser } from "../interfaces/IUser";

const UserShema: Schema = new Schema<IUser>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
  }
});

const User = mongoose.model<IUser>('User', UserShema);

export default User;

