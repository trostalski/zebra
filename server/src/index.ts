import { ApolloServerPluginLandingPageDisabled, ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { ApolloServer } from "apollo-server-express";
import connectRedis from "connect-redis";
import cors from "cors";
import express from "express";
import session from "express-session";
import Redis from "ioredis";
import path from "path";
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { createConnection } from "typeorm";
import { __prod__ } from "./constants";
import { AnkleBrachialIndex } from "./entities/AnkleBrachialIndex";
import { Patient } from "./entities/Patient";
import { PatientTask } from "./entities/PatientTask";
import { Task } from "./entities/Task";
import { User } from "./entities/User";
import { AnkleBrachialIndexResolver } from "./resolver/anklebrachialindex";
import { PatientResolver } from "./resolver/patient";
import { TaskResolver } from "./resolver/task";
import { UserResolver } from "./resolver/user";

const main = async () => {
  const connection = await createConnection({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "postgres",
    synchronize: true,
    logging: true,
    entities: [User, PatientTask, AnkleBrachialIndex, Patient, Task],
    migrations: [path.join(__dirname, "./migrations/*")],
  });
  // User.delete({});
  // Patient.delete({});
  // Task.delete({});
  // await connection.runMigrations();

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
        secure: __prod__, // cookie only works in https
      },
      saveUninitialized: false,
      secret: "secret",
      resave: false,
    })
  );

  const apolloServer = new ApolloServer({
    plugins: [
      process.env.NODE_ENV === "production"
        ? ApolloServerPluginLandingPageDisabled()
        : ApolloServerPluginLandingPageGraphQLPlayground(),
    ],
    schema: await buildSchema({
      resolvers: [
        UserResolver,
        TaskResolver,
        PatientResolver,
        AnkleBrachialIndexResolver,
      ],
    }),
    context: ({ req, res }) => ({ req, res, redis }),
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
