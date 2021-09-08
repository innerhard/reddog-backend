import express from "express";
import { ApolloServer } from "apollo-server-express";
import { createServer } from "http";
import compression from "compression";
import cors from "cors";
import helmet from "helmet";
import { schema } from "./schema";

const PORT = process.env.PORT || 3000;
const app = express();

const server = new ApolloServer({
  schema,
});

const runServer = async (server: ApolloServer) => {
  const httpServer = createServer(app);
  await server.start();
  await httpServer.listen({ port: PORT }, (): void =>
    console.log(`🚀GraphQL-Server is running on http://localhost:3000/graphql`)
  );
  server.applyMiddleware({ app, path: "/graphql" });
  app.use("*", cors);
  app.use(helmet());
  app.use(compression());
}


runServer( server );
