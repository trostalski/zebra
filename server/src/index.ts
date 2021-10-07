import "reflect-metadata";
import express from "express";
import { createConnection } from "typeorm";
import { ApolloServer } from "apollo-server-express";
import { UserResolver } from "./resolver/user";
import { buildSchema } from "type-graphql";
import { User } from "./entities/User";

const main = async () => {

  const connection = await createConnection({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "zebra",
    synchronize: true,
    logging: true,
    entities: [User],
  });

  // User.delete({});

  const app = express();

  const apolloServer = new ApolloServer({
    schema: await buildSchema({ resolvers: [UserResolver] }),
  });

  app.listen(4000, () => {
    console.log("listening on port 4000!");
  });

  app.get("/", (_, res) => {
    res.send("hello there");
  });

  await apolloServer.start();

  apolloServer.applyMiddleware({ app });
};

main().catch((err) => {
  console.error(err);
});
