import { NoteType } from "../../types.ts";

function Note({ _id, title, body, userId }: NoteType) {
  return (
    <div className="container">
      {_id && <p>_id: {_id}</p>}
      {title && <p>title: {title}</p>}
      {body && <p>body: {body}</p>}
      {userId && <p>userId: {userId._id}</p>}
    </div>
  );
}

export default Note;
