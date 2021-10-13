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
import redis from "redis";
import session from "express-session";
import connectRedis from "connect-redis";

declare module "express-session" {
  export interface SessionData {
    userId: number;
  }
}

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
  // Patient.delete({});
  // Task.delete({});

  const app = express();

  const RedisStore = connectRedis(session);
  let redisClient = redis.createClient();

  app.use(
    cors({
      origin: ["http://localhost:3000", "https://studio.apollographql.com"],
      credentials: true,
    })
  );

  app.use(
    session({
      name: "qid",
      store: new RedisStore({ client: redisClient, disableTouch: true }),
      saveUninitialized: false,
      secret: "jru209ofwopenkl",
      resave: false,
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 365 * 10, // 10 years
        httpOnly: true,
        sameSite: "lax", // csrf
      },
    })
  );
  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [UserResolver, TaskResolver, PatientResolver],
    }),
    context: ({ req, res }) => ({ req, res }),
  });

  app.listen(4000, () => {
    console.log("listening on port 4000!");
  });

  app.get("/", (req, res) => {});

  await apolloServer.start();

  apolloServer.applyMiddleware({ app, cors: false });
};

main().catch((err) => {
  console.error(err);
});
