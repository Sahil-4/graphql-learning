import { UserType } from "../../types.ts";

function User({ _id, name, email }: UserType) {
  return (
    <div className="container">
      {_id && <p>_id: {_id}</p>}
      {name && <p>name: {name}</p>}
      {email && <p>email: {email}</p>}
    </div>
  );
}

export default User;
