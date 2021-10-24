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
exports.PatientTaskResolver = void 0;
const Patient_1 = require("../entities/Patient");
const Task_1 = require("../entities/Task");
const User_1 = require("../entities/User");
const type_graphql_1 = require("type-graphql");
const PatientTask_1 = require("../entities/PatientTask");
let PatientTaskOutput = class PatientTaskOutput {
};
__decorate([
    (0, type_graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], PatientTaskOutput.prototype, "message", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => PatientTask_1.PatientTask, { nullable: true }),
    __metadata("design:type", PatientTask_1.PatientTask)
], PatientTaskOutput.prototype, "task", void 0);
PatientTaskOutput = __decorate([
    (0, type_graphql_1.ObjectType)()
], PatientTaskOutput);
let PatientTaskResolver = class PatientTaskResolver {
    listPatientTasks() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield PatientTask_1.PatientTask.find({
                relations: ["creatorUser", "forPatient", "parentTask"],
            });
            return result;
        });
    }
    specificPatientTasks(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield PatientTask_1.PatientTask.find({
                where: { patientId: input },
                relations: ["creatorUser", "forPatient", "parentTask"],
            });
            return result;
        });
    }
    createPatientTask(patientId, taskId, { req }) {
        return __awaiter(this, void 0, void 0, function* () {
            const patientTask = yield PatientTask_1.PatientTask.create({
                parentTask: yield Task_1.Task.findOne(taskId),
                creatorId: req.session.userId,
                patientId: patientId,
                forPatient: yield Patient_1.Patient.findOne(patientId),
                creatorUser: yield User_1.User.findOne(req.session.userId),
            }).save();
            return patientTask;
        });
    }
    deletePatientTask(id) {
        return __awaiter(this, void 0, void 0, function* () {
            PatientTask_1.PatientTask.delete(id);
            return { message: "Task deleted" };
        });
    }
};
__decorate([
    (0, type_graphql_1.Query)(() => [PatientTask_1.PatientTask], { nullable: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PatientTaskResolver.prototype, "listPatientTasks", null);
__decorate([
    (0, type_graphql_1.Query)(() => [PatientTask_1.PatientTask], { nullable: true }),
    __param(0, (0, type_graphql_1.Arg)("input")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PatientTaskResolver.prototype, "specificPatientTasks", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => PatientTask_1.PatientTask),
    __param(0, (0, type_graphql_1.Arg)("patientId")),
    __param(1, (0, type_graphql_1.Arg)("taskId")),
    __param(2, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Object]),
    __metadata("design:returntype", Promise)
], PatientTaskResolver.prototype, "createPatientTask", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => PatientTaskOutput),
    __param(0, (0, type_graphql_1.Arg)("PatientTaskId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PatientTaskResolver.prototype, "deletePatientTask", null);
PatientTaskResolver = __decorate([
    (0, type_graphql_1.Resolver)(PatientTask_1.PatientTask)
], PatientTaskResolver);
exports.PatientTaskResolver = PatientTaskResolver;
//# sourceMappingURL=patientTask.js.map