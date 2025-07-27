import mongoose from "mongoose";

export async function run() {
  await mongoose.connect("mongodb://localhost:27017/crud-auth", {
    user: "root",
    pass: "password",
    authSource: "admin",
  });
}

export default mongoose;
