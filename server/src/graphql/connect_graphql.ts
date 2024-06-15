import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { GraphQLSchema } from "../graphql/schema/schema.js";
import { GraphQLResolvers } from "../graphql/resolvers/resolvers.js";

export const connectGraphQL = (PORT: number) => {
  // graphql server instace using apollo server
  const server = new ApolloServer({
    typeDefs: GraphQLSchema,
    resolvers: GraphQLResolvers,
  });

  // graphql server starting
  startStandaloneServer(server, { listen: { port: PORT } })
    .then((res) => console.log(`graphql server is running at ${res.url}`))
    .catch((err) => console.log(err));
};
