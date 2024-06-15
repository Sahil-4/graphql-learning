import dotenv from "dotenv";
import { connectDatabase } from "./database/database.js";
// import { connectGraphQL } from "./graphql/connect_graphql.js";
import { getGraphQL } from "./graphql/get_graphql_server.js";
import express, { Request, Response } from "express";
import cors from "cors";
import { expressMiddleware } from "@apollo/server/express4";
// import { checkAdmin } from "./middleman/checkAdmin.js";

dotenv.config();

// const PORT_GRAPHQL: number = Number(process.env.PORT_GRAPHQL);
const PORT_EXPRESS: number = Number(process.env.PORT_EXPRESS);
const DATABASE_URL: string = process.env.DATABASE_URL!;

// ! Using GraphQL using apollo standalone server

// starting mongodb server
connectDatabase(DATABASE_URL);

// starting graphql server
// connectGraphQL(PORT_GRAPHQL);

// ! Using GraphQL using express server

// graphql server instance
const graphqlServer = getGraphQL();
await graphqlServer.start();

// express server
const app = express();
app.use(express.json());
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
  })
);

// adding expressMiddleware to use graphql with express - with authentication middleware
// app.use("/graphql", checkAdmin, expressMiddleware(graphqlServer));
// we can even add authentication on a perticular route (data request) like notes or user by using context

app.use("/graphql", expressMiddleware(graphqlServer));

app.get("/", (_: Request, res: Response) => {
  return res.status(200).json({
    success: true,
    message: "server is up and running",
    data: null,
  });
});

app.get("*", (_: Request, res: Response) => {
  return res.status(404).json({
    success: false,
    message: "route not exists",
    data: null,
  });
});

app.listen(PORT_EXPRESS, () => {
  console.log(`express server is running at ${PORT_EXPRESS}`);
});
