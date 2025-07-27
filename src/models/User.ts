import { Schema } from "mongoose";
import { IUser } from "../interfaces/user";
import mongoose from "../db/connection";

const UserShema: Schema = new Schema({
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
    required: true
  }
});

const UserModel = mongoose.model<IUser>('User', UserShema);

export default UserModel;

