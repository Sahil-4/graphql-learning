import dotenv from "dotenv";
import { connectDatabase } from "./database/database.js";
import { getGraphQL } from "./graphql/get_graphql_server.js";
import express from "express";
import cors from "cors";
import { expressMiddleware } from "@apollo/server/express4";
dotenv.config();
const PORT_EXPRESS = Number(process.env.PORT_EXPRESS);
const DATABASE_URL = process.env.DATABASE_URL;
connectDatabase(DATABASE_URL);
const graphqlServer = getGraphQL();
await graphqlServer.start();
const app = express();
app.use(express.json());
app.use(cors({
    origin: process.env.FRONTEND_URL,
}));
app.use("/graphql", expressMiddleware(graphqlServer));
app.get("/", (_, res) => {
    return res.status(200).json({
        success: true,
        message: "server is up and running",
        data: null,
    });
});
app.get("*", (_, res) => {
    return res.status(404).json({
        success: false,
        message: "route not exists",
        data: null,
    });
});
app.listen(PORT_EXPRESS, () => {
    console.log(`express server is running at ${PORT_EXPRESS}`);
});
