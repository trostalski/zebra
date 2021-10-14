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
import Redis from "ioredis";
import session from "express-session";
import connectRedis from "connect-redis";
import path from "path";

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
    entities: [User, Task, Patient],
    migrations: [path.join(__dirname, "./migrations/*")],
  });
  // User.delete({});
  // Patient.delete({});
  // Task.delete({});
//er  
  await connection.runMigrations();

  const app = express();

  const RedisStore = connectRedis(session);
  const redis = new Redis(process.env.REDIS_URL);

  app.use(
    cors({
      origin: ["http://localhost:3000", "https://studio.apollographql.com"],
      credentials: true,
    })
  );

  app.use(
    session({
      name: "qid",
      store: new RedisStore({
        client: redis,
        disableTouch: true,
      }),
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 365 * 10, // 10 years
        httpOnly: true,
        sameSite: "lax", // csrf
      },
      saveUninitialized: false,
      secret: "fje1üfpüj134pjo",
      resave: false,
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

  await apolloServer.start();

  apolloServer.applyMiddleware({ app, cors: false });
};

main().catch((err) => {
  console.error(err);
});
