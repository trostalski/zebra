"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.listen(4000, () => {
    console.log("listening on port 4000!");
});
app.get("/", (_, res) => {
    res.send("hello there");
});
//# sourceMappingURL=index.js.map