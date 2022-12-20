"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const To_doSchema = new mongoose_1.default.Schema({
    Title: {
        type: String,
    },
    Status: {
        type: String,
        default: "Your Task has not been completed"
    },
    Description: {
        type: String,
    },
}, { timestamps: true });
const listTodo = mongoose_1.default.model("Myt To-do list", To_doSchema);
exports.default = listTodo;
