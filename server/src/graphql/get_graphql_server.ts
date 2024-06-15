import { ApolloServer } from "@apollo/server";
import { GraphQLSchema } from "../graphql/schema/schema.js";
import { GraphQLResolvers } from "../graphql/resolvers/resolvers.js";

export const getGraphQL = () => {
  // graphql server instace using apollo server
  const server = new ApolloServer({
    typeDefs: GraphQLSchema,
    resolvers: GraphQLResolvers,
  });

  return server;
};
