import { Schema, Types, model } from "mongoose";

type NoteModelType = {
  _id: Types.ObjectId;
  title: string;
  body: string;
  userId: Types.ObjectId;
  createdAt: NativeDate;
  updatedAt: NativeDate;
};

export const noteSchema = new Schema(
  {
    title: { type: String, required: true },
    body: { type: String, required: true },
    userId: { type: Types.ObjectId, required: true, ref: "User" },
  },
  {
    timestamps: true,
  }
);

const Note = model<NoteModelType>("Note", noteSchema);
export default Note;
export type { NoteModelType };
