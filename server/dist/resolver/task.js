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
exports.TaskResolver = void 0;
const Task_1 = require("../entities/Task");
const type_graphql_1 = require("type-graphql");
const resolverInputs_1 = require("./utils/resolverInputs");
let TaskOutput = class TaskOutput {
};
__decorate([
    (0, type_graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], TaskOutput.prototype, "message", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => Task_1.Task, { nullable: true }),
    __metadata("design:type", Task_1.Task)
], TaskOutput.prototype, "task", void 0);
TaskOutput = __decorate([
    (0, type_graphql_1.ObjectType)()
], TaskOutput);
let TaskResolver = class TaskResolver {
    listTasks() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Task_1.Task.find({});
        });
    }
    createTask(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const task = yield Task_1.Task.create(input).save();
            return { task };
        });
    }
    deleteTask(id) {
        return __awaiter(this, void 0, void 0, function* () {
            Task_1.Task.delete(id);
            return { message: "Task deleted" };
        });
    }
};
__decorate([
    (0, type_graphql_1.Query)(() => [Task_1.Task], { nullable: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TaskResolver.prototype, "listTasks", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => TaskOutput),
    __param(0, (0, type_graphql_1.Arg)("taskData")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [resolverInputs_1.TaskInput]),
    __metadata("design:returntype", Promise)
], TaskResolver.prototype, "createTask", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => TaskOutput),
    __param(0, (0, type_graphql_1.Arg)("taskId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TaskResolver.prototype, "deleteTask", null);
TaskResolver = __decorate([
    (0, type_graphql_1.Resolver)(Task_1.Task)
], TaskResolver);
exports.TaskResolver = TaskResolver;
//# sourceMappingURL=task.js.map