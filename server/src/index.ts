import "reflect-metadata";
import express from "express";
import { createConnection } from "typeorm";
import { User } from "./entities/User";
import { Patient } from "./entities/Patient";
import { Procedure } from "./entities/Procedure";

const main = async () => {
  const connection = await createConnection({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "zebra",
    synchronize: true,
    entities: [User, Patient, Procedure],
  });

  const app = express();

  app.listen(4000, () => {
    console.log("listening on port 4000!");
  });

  app.get("/", (_, res) => {
    res.send("hello there");
  });
};

main();
