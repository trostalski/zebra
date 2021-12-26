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
const apollo_server_core_1 = require("apollo-server-core");
const apollo_server_express_1 = require("apollo-server-express");
const connect_redis_1 = __importDefault(require("connect-redis"));
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const express_session_1 = __importDefault(require("express-session"));
const ioredis_1 = __importDefault(require("ioredis"));
const path_1 = __importDefault(require("path"));
require("reflect-metadata");
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
const constants_1 = require("./constants");
const AnkleBrachialIndex_1 = require("./entities/AnkleBrachialIndex");
const DrawBlood_1 = require("./entities/DrawBlood");
const Patient_1 = require("./entities/Patient");
const PatientTask_1 = require("./entities/PatientTask");
const Task_1 = require("./entities/Task");
const User_1 = require("./entities/User");
const VenousCatheter_1 = require("./entities/VenousCatheter");
const VitalSigns_1 = require("./entities/VitalSigns");
const anklebrachialindex_1 = require("./resolver/anklebrachialindex");
const drawBloodResolver_1 = require("./resolver/drawBloodResolver");
const patient_1 = require("./resolver/patient");
const patientTask_1 = require("./resolver/patientTask");
const task_1 = require("./resolver/task");
const user_1 = require("./resolver/user");
const venousCatheterResolver_1 = require("./resolver/venousCatheterResolver");
const vitalSignsResolver_1 = require("./resolver/vitalSignsResolver");
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    const connection = yield (0, typeorm_1.createConnection)({
        type: "postgres",
        host: "localhost",
        port: 5432,
        username: "postgres",
        password: "postgres",
        database: "postgres",
        synchronize: true,
        logging: true,
        entities: [
            User_1.User,
            PatientTask_1.PatientTask,
            AnkleBrachialIndex_1.AnkleBrachialIndex,
            Patient_1.Patient,
            Task_1.Task,
            DrawBlood_1.DrawBlood,
            VenousCatheter_1.VenousCatheter,
            VitalSigns_1.VitalSigns,
        ],
        migrations: [path_1.default.join(__dirname, "./migrations/*")],
    });
    const app = (0, express_1.default)();
    const RedisStore = (0, connect_redis_1.default)(express_session_1.default);
    const redis = new ioredis_1.default(process.env.REDIS_URL);
    app.use((0, cors_1.default)({
        origin: ["http://localhost:3000", "https://studio.apollographql.com"],
        credentials: true,
    }));
    app.use((0, express_session_1.default)({
        name: "qid",
        store: new RedisStore({
            client: redis,
            disableTouch: true,
        }),
        cookie: {
            maxAge: 1000 * 60 * 60 * 24 * 365 * 10,
            httpOnly: true,
            sameSite: "lax",
            secure: constants_1.__prod__,
        },
        saveUninitialized: false,
        secret: "secret",
        resave: false,
    }));
    const apolloServer = new apollo_server_express_1.ApolloServer({
        plugins: [
            process.env.NODE_ENV === "production"
                ? (0, apollo_server_core_1.ApolloServerPluginLandingPageDisabled)()
                : (0, apollo_server_core_1.ApolloServerPluginLandingPageGraphQLPlayground)(),
        ],
        schema: yield (0, type_graphql_1.buildSchema)({
            resolvers: [
                patientTask_1.PatientTaskResolver,
                user_1.UserResolver,
                task_1.TaskResolver,
                patient_1.PatientResolver,
                anklebrachialindex_1.AnkleBrachialIndexResolver,
                drawBloodResolver_1.DrawBloodResolver,
                venousCatheterResolver_1.VenousCatheterResolver,
                vitalSignsResolver_1.VitalSignsResolver,
            ],
        }),
        context: ({ req, res }) => ({ req, res, redis }),
    });
    app.listen(4000, () => {
        console.log("listening on port 4000!");
    });
    yield apolloServer.start();
    apolloServer.applyMiddleware({ app, cors: false });
});
main().catch((err) => {
    console.error(err);
});
//# sourceMappingURL=index.js.map