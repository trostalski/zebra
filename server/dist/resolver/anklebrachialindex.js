"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnkleBrachialIndexResolver = void 0;
const AnkleBrachialIndex_1 = require("../entities/AnkleBrachialIndex");
const PatientTask_1 = require("../entities/PatientTask");
const User_1 = require("../entities/User");
const type_graphql_1 = require("type-graphql");
const resolverInputs_1 = require("./utils/resolverInputs");
const Patient_1 = require("../entities/Patient");
const Task_1 = require("../entities/Task");
let AnkleBrachialIndexResolver = class AnkleBrachialIndexResolver {
    creator(task) {
        return User_1.User.findOne(task.creatorId);
    }
    forPatient(task) {
        return Patient_1.Patient.findOne(task.patientId);
    }
    listAnkleBrachialIndex() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield AnkleBrachialIndex_1.AnkleBrachialIndex.find({});
        });
    }
    ankleBrachialIndexParentTask() {
        return __awaiter(this, void 0, void 0, function* () {
            return Task_1.Task.findOne({ where: { name: "Ankle Brachial Index" } });
        });
    }
    deleteAnkleBrachialIndex(inputId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield AnkleBrachialIndex_1.AnkleBrachialIndex.delete(inputId);
                return true;
            }
            catch (error) {
                console.log(error);
                return null;
            }
        });
    }
    createAbi(abiInput, { req }) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("current ID", req.session.userId);
            const result = yield AnkleBrachialIndex_1.AnkleBrachialIndex.create(Object.assign({ name: "Ankle Brachial Index (ABI)", explanation: "Quotient aus Blutdruck am Unterschenkel und Blutdruck am Oberarm", creatorId: req.session.userId, leftResult: Math.round(((abiInput.leftLeg / abiInput.leftArm) * 10) / 10), rightResult: Math.round((abiInput.rightLeg / abiInput.rightArm) * 10) / 10 }, abiInput)).save();
            return result;
        });
    }
};
__decorate([
    (0, type_graphql_1.FieldResolver)(() => User_1.User),
    __param(0, (0, type_graphql_1.Root)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [PatientTask_1.PatientTask]),
    __metadata("design:returntype", void 0)
], AnkleBrachialIndexResolver.prototype, "creator", null);
__decorate([
    (0, type_graphql_1.FieldResolver)(() => Patient_1.Patient),
    __param(0, (0, type_graphql_1.Root)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [PatientTask_1.PatientTask]),
    __metadata("design:returntype", void 0)
], AnkleBrachialIndexResolver.prototype, "forPatient", null);
__decorate([
    (0, type_graphql_1.Query)(() => [AnkleBrachialIndex_1.AnkleBrachialIndex]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AnkleBrachialIndexResolver.prototype, "listAnkleBrachialIndex", null);
__decorate([
    (0, type_graphql_1.Query)(() => Task_1.Task),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AnkleBrachialIndexResolver.prototype, "ankleBrachialIndexParentTask", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Boolean),
    __param(0, (0, type_graphql_1.Arg)("input")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AnkleBrachialIndexResolver.prototype, "deleteAnkleBrachialIndex", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => AnkleBrachialIndex_1.AnkleBrachialIndex),
    __param(0, (0, type_graphql_1.Arg)("AbiInput")),
    __param(1, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [resolverInputs_1.AnkleBrachialIndexInput, Object]),
    __metadata("design:returntype", Promise)
], AnkleBrachialIndexResolver.prototype, "createAbi", null);
AnkleBrachialIndexResolver = __decorate([
    (0, type_graphql_1.Resolver)(AnkleBrachialIndex_1.AnkleBrachialIndex)
], AnkleBrachialIndexResolver);
exports.AnkleBrachialIndexResolver = AnkleBrachialIndexResolver;
//# sourceMappingURL=anklebrachialindex.js.map