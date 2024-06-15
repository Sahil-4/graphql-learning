import Note from "../model/note.model.js";
import User from "../model/user.model.js";
export const getAllNotes = async () => {
    const d = await Note.find();
    return d;
};
export const findNoteUser = async (parent) => {
    const d = await User.findById(parent.userId);
    return d;
};
export const getUnknownAttribute = async (parent) => {
    return `random thing for note id : ${parent._id}`;
};
