import Note from "../model/note.model.js";
import User, { UserModelType } from "../model/user.model.js";

export const getAllUsers = async () => {
  const d = await User.find();
  return d;
};

export const getUserByID = async (_: any, args: { _id: string }) => {
  const { _id } = args;
  const d = await User.findById(_id);
  return d;
};

export const getUsersNotes = async (parent: UserModelType) => {
  const d = await Note.find({ userId: parent._id });
  return d;
};

export const createNewUser = async (_: any, args: { name: string; email: string; passkey: string }) => {
  const { name, email, passkey } = args;
  const user = await User.create({
    name, email, passkey
  });
  return user;
};
