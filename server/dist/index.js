"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const typeorm_1 = require("typeorm");
const apollo_server_express_1 = require("apollo-server-express");
const user_1 = require("./resolver/user");
const type_graphql_1 = require("type-graphql");
const User_1 = require("./entities/User");
const Task_1 = require("./entities/Task");
const task_1 = require("./resolver/task");
const Patient_1 = require("./entities/Patient");
const patient_1 = require("./resolver/patient");
const cors_1 = __importDefault(require("cors"));
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, typeorm_1.createConnection)({
        type: "postgres",
        host: "localhost",
        port: 5432,
        username: "postgres",
        password: "postgres",
        database: "zebra",
        synchronize: true,
        logging: true,
        entities: [User_1.User, Task_1.Task, Patient_1.Patient],
    });
    const app = (0, express_1.default)();
    app.use((0, cors_1.default)({
        origin: ["http://localhost:3000", "https://studio.apollographql.com"],
        credentials: true,
    }));
    const apolloServer = new apollo_server_express_1.ApolloServer({
        schema: yield (0, type_graphql_1.buildSchema)({
            resolvers: [user_1.UserResolver, task_1.TaskResolver, patient_1.PatientResolver],
        }),
    });
    app.listen(4000, () => {
        console.log("listening on port 4000!");
    });
    app.get("/", (_, res) => {
        res.send("hello there");
    });
    yield apolloServer.start();
    apolloServer.applyMiddleware({ app, cors: false });
});
main().catch((err) => {
    console.error(err);
});
//# sourceMappingURL=index.js.map