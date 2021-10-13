import "reflect-metadata";
import express from "express";
import { createConnection } from "typeorm";
import { ApolloServer } from "apollo-server-express";
import { UserResolver } from "./resolver/user";
import { buildSchema } from "type-graphql";
import { User } from "./entities/User";
import { Task } from "./entities/Task";
import { TaskResolver } from "./resolver/task";
import { Patient } from "./entities/Patient";
import { PatientResolver } from "./resolver/patient";
import cors from "cors";
// import redis from "redis";
// import session from "express-session";
// import connectRedis from "connect-redis"

// const RedisStore = connectRedis(session)
// let redisClient = redis.createClient();

// app.use(
//   session({
//     store: new RedisStore({ client: redisClient }),
//     saveUninitialized: false,
//     secret: "keyboard cat",
//     resave: false,
//   })
// );

const main = async () => {
  /*   const connection = */ await createConnection({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "zebra",
    synchronize: true,
    logging: true,
    entities: [User, Task, Patient],
  });

  // User.delete({});

  const app = express();

  app.use(
    cors({
      origin: ["http://localhost:3000", "https://studio.apollographql.com"],
      credentials: true,
    })
  );

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [UserResolver, TaskResolver, PatientResolver],
    }),
  });

  app.listen(4000, () => {
    console.log("listening on port 4000!");
  });

  app.get("/", (_, res) => {
    res.send("hello there");
  });

  await apolloServer.start();

  apolloServer.applyMiddleware({ app, cors: false });
};

main().catch((err) => {
  console.error(err);
});
