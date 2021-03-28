// require("@babel/register")({ extensions: [".js", ".ts"] });

import express from "express";
import { ApolloServer } from "apollo-server-express";

import { Query } from "./resolvers";
import typeDefs from "./typeDefs";
import { APP_PORT } from "./constants";

const app = express();

const resolvers = {
  Query,
};

const server = new ApolloServer({ typeDefs, resolvers, tracing: true });

server.applyMiddleware({ app });

app.listen(APP_PORT, () =>
  console.log(
    `🚀 Server is running at http://localhost:${APP_PORT}` + server.graphqlPath
  )
);
