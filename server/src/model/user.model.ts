import { Schema, Types, model } from "mongoose";

type UserModelType = {
  _id: Types.ObjectId;
  name: string;
  email: string;
  passkey: string;
  createdAt: NativeDate;
  updatedAt: NativeDate;
};

export const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    passkey: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const User = model<UserModelType>("User", userSchema);
export default User;
export type { UserModelType };
