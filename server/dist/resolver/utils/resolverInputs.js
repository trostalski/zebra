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
exports.TaskInput = exports.PatientInput = exports.AnkleBrachialIndexInput = exports.RegisterInput = void 0;
const type_graphql_1 = require("type-graphql");
let RegisterInput = class RegisterInput {
};
__decorate([
    (0, type_graphql_1.Field)(() => String),
    __metadata("design:type", String)
], RegisterInput.prototype, "username", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String),
    __metadata("design:type", String)
], RegisterInput.prototype, "firstname", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String),
    __metadata("design:type", String)
], RegisterInput.prototype, "lastname", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String),
    __metadata("design:type", String)
], RegisterInput.prototype, "email", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String),
    __metadata("design:type", String)
], RegisterInput.prototype, "password", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String),
    __metadata("design:type", String)
], RegisterInput.prototype, "department", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String),
    __metadata("design:type", String)
], RegisterInput.prototype, "position", void 0);
RegisterInput = __decorate([
    (0, type_graphql_1.InputType)()
], RegisterInput);
exports.RegisterInput = RegisterInput;
let AnkleBrachialIndexInput = class AnkleBrachialIndexInput {
};
__decorate([
    (0, type_graphql_1.Field)(() => type_graphql_1.Int),
    __metadata("design:type", Number)
], AnkleBrachialIndexInput.prototype, "rightArm", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => type_graphql_1.Int),
    __metadata("design:type", Number)
], AnkleBrachialIndexInput.prototype, "leftArm", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => type_graphql_1.Int),
    __metadata("design:type", Number)
], AnkleBrachialIndexInput.prototype, "rightLeg", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => type_graphql_1.Int),
    __metadata("design:type", Number)
], AnkleBrachialIndexInput.prototype, "leftLeg", void 0);
AnkleBrachialIndexInput = __decorate([
    (0, type_graphql_1.InputType)()
], AnkleBrachialIndexInput);
exports.AnkleBrachialIndexInput = AnkleBrachialIndexInput;
let PatientInput = class PatientInput {
};
__decorate([
    (0, type_graphql_1.Field)(() => String),
    __metadata("design:type", String)
], PatientInput.prototype, "firstname", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String),
    __metadata("design:type", String)
], PatientInput.prototype, "lastname", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String),
    __metadata("design:type", Number)
], PatientInput.prototype, "age", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String),
    __metadata("design:type", String)
], PatientInput.prototype, "diagnosis", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => type_graphql_1.Int),
    __metadata("design:type", Number)
], PatientInput.prototype, "room", void 0);
PatientInput = __decorate([
    (0, type_graphql_1.InputType)()
], PatientInput);
exports.PatientInput = PatientInput;
let TaskInput = class TaskInput {
};
__decorate([
    (0, type_graphql_1.Field)(() => String),
    __metadata("design:type", String)
], TaskInput.prototype, "name", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String),
    __metadata("design:type", String)
], TaskInput.prototype, "explanation", void 0);
TaskInput = __decorate([
    (0, type_graphql_1.InputType)()
], TaskInput);
exports.TaskInput = TaskInput;
//# sourceMappingURL=resolverInputs.js.map