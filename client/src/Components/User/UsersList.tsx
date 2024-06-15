import { ApolloError } from "@apollo/client";
import { UserType } from "../../types.ts";
import User from "./User.tsx";

type PropType = {
  error: ApolloError | undefined;
  loading: boolean;
  users: UserType[];
};

function UsersList({ error, loading, users }: PropType) {
  if (error) return <div>{error.message}</div>;
  if (loading) return <div>Loading...</div>;
  if (!users) return <div>Nothing to show here</div>;
  return (
    <div>
      <p>{users?.length} users</p>
      <ul>
        {users?.map((user: UserType) => {
          return (
            <User
              key={user._id}
              _id={user._id}
              name={user.name}
              email={user?.email}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default UsersList;
