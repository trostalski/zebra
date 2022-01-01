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
exports.VitalSignsInput = exports.VenousCatheterInput = exports.DrawBloodInput = exports.TaskInput = exports.PatientInput = exports.PatientTaskInput = exports.AnkleBrachialIndexInput = exports.RegisterInput = void 0;
const type_graphql_1 = require("type-graphql");
let RegisterInput = class RegisterInput {
};
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
    (0, type_graphql_1.Field)(() => type_graphql_1.Float),
    __metadata("design:type", Number)
], AnkleBrachialIndexInput.prototype, "rightArm", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => type_graphql_1.Float),
    __metadata("design:type", Number)
], AnkleBrachialIndexInput.prototype, "leftArm", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => type_graphql_1.Float),
    __metadata("design:type", Number)
], AnkleBrachialIndexInput.prototype, "rightLeg", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => type_graphql_1.Float),
    __metadata("design:type", Number)
], AnkleBrachialIndexInput.prototype, "leftLeg", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => type_graphql_1.Float),
    __metadata("design:type", Number)
], AnkleBrachialIndexInput.prototype, "leftAbi", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => type_graphql_1.Float),
    __metadata("design:type", Number)
], AnkleBrachialIndexInput.prototype, "rightAbi", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => type_graphql_1.Int),
    __metadata("design:type", Number)
], AnkleBrachialIndexInput.prototype, "patientTaskId", void 0);
AnkleBrachialIndexInput = __decorate([
    (0, type_graphql_1.InputType)()
], AnkleBrachialIndexInput);
exports.AnkleBrachialIndexInput = AnkleBrachialIndexInput;
let PatientTaskInput = class PatientTaskInput {
};
__decorate([
    (0, type_graphql_1.Field)(() => String),
    __metadata("design:type", String)
], PatientTaskInput.prototype, "timepoint", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => Boolean, { defaultValue: false }),
    __metadata("design:type", Boolean)
], PatientTaskInput.prototype, "urgent", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], PatientTaskInput.prototype, "comment", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], PatientTaskInput.prototype, "result", void 0);
PatientTaskInput = __decorate([
    (0, type_graphql_1.InputType)()
], PatientTaskInput);
exports.PatientTaskInput = PatientTaskInput;
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
let DrawBloodInput = class DrawBloodInput {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], DrawBloodInput.prototype, "patientTaskId", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], DrawBloodInput.prototype, "FlaskType", void 0);
DrawBloodInput = __decorate([
    (0, type_graphql_1.InputType)()
], DrawBloodInput);
exports.DrawBloodInput = DrawBloodInput;
let VenousCatheterInput = class VenousCatheterInput {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], VenousCatheterInput.prototype, "patientTaskId", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], VenousCatheterInput.prototype, "location", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], VenousCatheterInput.prototype, "catheterType", void 0);
VenousCatheterInput = __decorate([
    (0, type_graphql_1.InputType)()
], VenousCatheterInput);
exports.VenousCatheterInput = VenousCatheterInput;
let VitalSignsInput = class VitalSignsInput {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], VitalSignsInput.prototype, "patientTaskId", void 0);
__decorate([
    (0, type_graphql_1.Field)({ defaultValue: false }),
    __metadata("design:type", Boolean)
], VitalSignsInput.prototype, "bloodPressureRequired", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], VitalSignsInput.prototype, "bloodPressureResult", void 0);
__decorate([
    (0, type_graphql_1.Field)({ defaultValue: false }),
    __metadata("design:type", Boolean)
], VitalSignsInput.prototype, "pulseRequired", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], VitalSignsInput.prototype, "pulseResult", void 0);
__decorate([
    (0, type_graphql_1.Field)({ defaultValue: false }),
    __metadata("design:type", Boolean)
], VitalSignsInput.prototype, "temperatureRequired", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], VitalSignsInput.prototype, "temperatureResult", void 0);
VitalSignsInput = __decorate([
    (0, type_graphql_1.InputType)()
], VitalSignsInput);
exports.VitalSignsInput = VitalSignsInput;
//# sourceMappingURL=resolverInputs.js.map