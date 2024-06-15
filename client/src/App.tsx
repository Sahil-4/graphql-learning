// import { gql, useQuery } from "@apollo/client";
import { useLazyQuery } from "@apollo/client";
import { GET_USERS, GET_NOTES } from "./graphql/queries.ts";
import { NewUser, UsersList, NotesList } from "./Components/INDEX.ts";
import "./App.css";

const App = () => {
  // this will automatically make network request on component mount
  // const { data, error, loading } = useQuery(gql(GET_USERS));
  // const users = data?.users;

  // using lazy load - have to trigger network request manually
  const [getUsers, getUsersQuery] = useLazyQuery(GET_USERS);
  const [getNotes, getNotesQuery] = useLazyQuery(GET_NOTES);

  return (
    <div>
      <button onClick={() => getUsers()}>Get Users</button>
      <button onClick={() => getNotes()}>Get Notes</button>
      <NewUser />
      <UsersList
        loading={getUsersQuery.loading}
        error={getUsersQuery.error}
        users={getUsersQuery.data?.users}
      />
      <NotesList
        loading={getNotesQuery.loading}
        error={getNotesQuery.error}
        notes={getNotesQuery.data?.notes}
      />
    </div>
  );
};

export default App;
