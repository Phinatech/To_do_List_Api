"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const to_doListRouter_1 = __importDefault(require("../router/to_doListRouter"));
require("../config/db");
const app = (0, express_1.default)();
app.use(express_1.default.json());
const Port = process.env.port || 1890;
app.use("/server", to_doListRouter_1.default);
app.get("/", (req, res) => {
    return res.status(200).json({
        message: "Server is up and Running"
    });
});
app.listen(Port, () => {
    console.log("Server is Listening 😎😎😊");
});
