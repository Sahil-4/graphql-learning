import Note from "../model/note.model.js";
import User from "../model/user.model.js";
export const getAllUsers = async () => {
    const d = await User.find();
    return d;
};
export const getUserByID = async (_, args) => {
    const { _id } = args;
    const d = await User.findById(_id);
    return d;
};
export const getUsersNotes = async (parent) => {
    const d = await Note.find({ userId: parent._id });
    return d;
};
export const createNewUser = async (_, args) => {
    const { name, email, passkey } = args;
    const user = await User.create({
        name, email, passkey
    });
    return user;
};
