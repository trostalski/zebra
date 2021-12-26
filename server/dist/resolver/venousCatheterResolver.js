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
exports.VenousCatheterResolver = void 0;
const VenousCatheter_1 = require("../entities/VenousCatheter");
const type_graphql_1 = require("type-graphql");
const PatientTask_1 = require("../entities/PatientTask");
const Task_1 = require("../entities/Task");
const resolverInputs_1 = require("./utils/resolverInputs");
let VenousCatheterResolver = class VenousCatheterResolver {
    listAnkleBrachialIndex() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield VenousCatheter_1.VenousCatheter.find({});
        });
    }
    VenousCatheterParentTask() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Task_1.Task.findOne({ where: { name: "Intravenöser Zugang" } });
        });
    }
    deleteVenousCatheter(inputId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield VenousCatheter_1.VenousCatheter.delete(inputId);
                return true;
            }
            catch (error) {
                console.log(error);
                return null;
            }
        });
    }
    createVenousCatheter(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const patientTask = yield PatientTask_1.PatientTask.findOne(input.patientTaskId);
            const result = yield VenousCatheter_1.VenousCatheter.create(Object.assign(Object.assign({}, input), { patientTask: patientTask })).save();
            return result;
        });
    }
};
__decorate([
    (0, type_graphql_1.Query)(() => [VenousCatheter_1.VenousCatheter]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], VenousCatheterResolver.prototype, "listAnkleBrachialIndex", null);
__decorate([
    (0, type_graphql_1.Query)(() => Task_1.Task),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], VenousCatheterResolver.prototype, "VenousCatheterParentTask", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Boolean),
    __param(0, (0, type_graphql_1.Arg)("input")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], VenousCatheterResolver.prototype, "deleteVenousCatheter", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => VenousCatheter_1.VenousCatheter),
    __param(0, (0, type_graphql_1.Arg)("input")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [resolverInputs_1.VenousCatheterInput]),
    __metadata("design:returntype", Promise)
], VenousCatheterResolver.prototype, "createVenousCatheter", null);
VenousCatheterResolver = __decorate([
    (0, type_graphql_1.Resolver)(VenousCatheter_1.VenousCatheter)
], VenousCatheterResolver);
exports.VenousCatheterResolver = VenousCatheterResolver;
//# sourceMappingURL=venousCatheterResolver.js.map