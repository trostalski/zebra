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
exports.PatientResolver = exports.NumPatientTasks = void 0;
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
const Patient_1 = require("../entities/Patient");
const resolverInputs_1 = require("./utils/resolverInputs");
let NumPatientTasks = class NumPatientTasks {
};
__decorate([
    (0, type_graphql_1.Field)(() => type_graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], NumPatientTasks.prototype, "forPatientId", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Number)
], NumPatientTasks.prototype, "count", void 0);
NumPatientTasks = __decorate([
    (0, type_graphql_1.ObjectType)()
], NumPatientTasks);
exports.NumPatientTasks = NumPatientTasks;
let PatientResolver = class PatientResolver {
    listPatients() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield (0, typeorm_1.getConnection)().query(`SELECT *
      FROM "patient"`);
            return result;
        });
    }
    getPatientById(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield Patient_1.Patient.findOne(input);
            return result;
        });
    }
    patientRooms() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = [];
            const rooms = yield (0, typeorm_1.getConnection)().query(`SELECT room
      FROM "patient"
      GROUP by room 
      ORDER by room ASC;`);
            rooms.forEach((room) => {
                result.push(room["room"]);
            });
            return result;
        });
    }
    numPatientTasks() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield (0, typeorm_1.getConnection)().query(` SELECT patient_task."forPatientId", count(*)
        FROM patient_task
        GROUP BY patient_task."forPatientId"`);
            return result;
        });
    }
    createPatient(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const patient = yield Patient_1.Patient.create(input).save();
            return patient;
        });
    }
    deletePatient(id) {
        return __awaiter(this, void 0, void 0, function* () {
            Patient_1.Patient.delete(id);
            return "Patient deleted";
        });
    }
};
__decorate([
    (0, type_graphql_1.Query)(() => [Patient_1.Patient]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PatientResolver.prototype, "listPatients", null);
__decorate([
    (0, type_graphql_1.Query)(() => Patient_1.Patient),
    __param(0, (0, type_graphql_1.Arg)("input")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PatientResolver.prototype, "getPatientById", null);
__decorate([
    (0, type_graphql_1.Query)(() => [type_graphql_1.Int]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PatientResolver.prototype, "patientRooms", null);
__decorate([
    (0, type_graphql_1.Query)(() => [NumPatientTasks]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PatientResolver.prototype, "numPatientTasks", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Patient_1.Patient),
    __param(0, (0, type_graphql_1.Arg)("Patientdata")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [resolverInputs_1.PatientInput]),
    __metadata("design:returntype", Promise)
], PatientResolver.prototype, "createPatient", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => String),
    __param(0, (0, type_graphql_1.Arg)("taskId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PatientResolver.prototype, "deletePatient", null);
PatientResolver = __decorate([
    (0, type_graphql_1.Resolver)(Patient_1.Patient)
], PatientResolver);
exports.PatientResolver = PatientResolver;
//# sourceMappingURL=patient.js.map