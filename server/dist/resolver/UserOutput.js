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
exports.UserOutput = void 0;
const Patient_1 = require("../entities/Patient");
const type_graphql_1 = require("type-graphql");
let UserOutput = class UserOutput {
};
__decorate([
    (0, type_graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], UserOutput.prototype, "message", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => Patient_1.Patient, { nullable: true }),
    __metadata("design:type", Patient_1.Patient)
], UserOutput.prototype, "patient", void 0);
UserOutput = __decorate([
    (0, type_graphql_1.ObjectType)()
], UserOutput);
exports.UserOutput = UserOutput;
//# sourceMappingURL=UserOutput.js.map