import { ApolloError } from "@apollo/client";
import { NoteType } from "../../types.ts";
import Note from "./Note.tsx";

type PropType = {
  error: ApolloError | undefined;
  loading: boolean;
  notes: NoteType[];
};

function UsersList({ error, loading, notes }: PropType) {
  if (error) return <div>{error.message}</div>;
  if (loading) return <div>Loading...</div>;
  if (!notes) return <div>Nothing to show here</div>;
  return (
    <div>
      <p>{notes?.length} users</p>
      <ul>
        {notes?.map((note: NoteType) => {
          return (
            <Note
              key={note._id}
              _id={note._id}
              title={note.title}
              body={note.body}
              userId={note.userId}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default UsersList;
