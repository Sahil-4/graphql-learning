import { Schema, Types, model } from "mongoose";
export const noteSchema = new Schema({
    title: { type: String, required: true },
    body: { type: String, required: true },
    userId: { type: Types.ObjectId, required: true, ref: "User" },
}, {
    timestamps: true,
});
const Note = model("Note", noteSchema);
export default Note;
