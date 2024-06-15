export const GraphQLSchema = `#graphql

type User {
  _id: ID!
  name: String!
  email: String!
  passkey: String
  createdAt: String
  updatedAt: String
  notes: [Note]
}

type Note {
  _id: ID!
  title: String!
  body: String!
  userId: User!
  createdAt: String
  updatedAt: String
  someUnknownAttribute: String
}

type Query {
  users: [User], # get all users 
  user(_id:ID!): User, # get user by id 
  notes: [Note], # get all notes 
}

type Mutation {
  User(name:String!, email:String!, passkey:String!) : User # create new user 
}
`;
