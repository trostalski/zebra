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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatientTask = void 0;
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
const Patient_1 = require("./Patient");
const Task_1 = require("./Task");
const User_1 = require("./User");
let PatientTask = class PatientTask extends typeorm_1.BaseEntity {
};
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], PatientTask.prototype, "id", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.ManyToOne)(() => Task_1.Task, (task) => task.patientTasks, { onDelete: "CASCADE" }),
    __metadata("design:type", Task_1.Task)
], PatientTask.prototype, "parentTask", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.ManyToOne)(() => User_1.User, (user) => user.patientTasks, { onDelete: "CASCADE" }),
    __metadata("design:type", User_1.User)
], PatientTask.prototype, "creatorUser", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.ManyToOne)(() => Patient_1.Patient, (patient) => patient.patientTasks, {
        onDelete: "CASCADE",
        nullable: true,
    }),
    __metadata("design:type", Patient_1.Patient)
], PatientTask.prototype, "forPatient", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PatientTask.prototype, "timepoint", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    (0, typeorm_1.Column)({ nullable: true, type: "text" }),
    __metadata("design:type", String)
], PatientTask.prototype, "comment", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => Boolean),
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], PatientTask.prototype, "urgent", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => Boolean),
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], PatientTask.prototype, "completed", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String, { nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], PatientTask.prototype, "result", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], PatientTask.prototype, "createdAt", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], PatientTask.prototype, "updatedAt", void 0);
PatientTask = __decorate([
    (0, type_graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)()
], PatientTask);
exports.PatientTask = PatientTask;
//# sourceMappingURL=PatientTask.js.map