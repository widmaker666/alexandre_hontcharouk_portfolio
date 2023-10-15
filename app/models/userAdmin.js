import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    name: String,
    password: String,
    phrase: String,
  },  
);

const UserAdmin =
  mongoose.models.UserAdmin || mongoose.models("UserAdmin", userSchema);

export default UserAdmin;
