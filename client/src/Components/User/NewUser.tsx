import { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../../graphql/queries";
import User from "./User.tsx";

function NewUser() {
  const [user, setUser] = useState({
    name: "new user name",
    email: "mailnew@MediaList.com",
    passkey: "secret@password",
  });
  const [addUser, addUserQuery] = useMutation(ADD_USER);

  if (addUserQuery.called && !addUserQuery.loading) {
    return (
      <div>
        new user
        <User
          _id={addUserQuery.data.User._id}
          name={addUserQuery.data.User.name}
          email={addUserQuery.data.User.email}
        />
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addUser({ variables: user });
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        value={user.name}
        placeholder="name"
        onChange={(e) => setUser({ ...user, name: e.target.value })}
      />
      <input
        type="text"
        value={user.email}
        placeholder="email"
        onChange={(e) => setUser({ ...user, email: e.target.value })}
      />
      <input
        type="text"
        value={user.passkey}
        placeholder="passkey"
        onChange={(e) => setUser({ ...user, passkey: e.target.value })}
      />
      <button type="submit">Add new User</button>
    </form>
  );
}

export default NewUser;
