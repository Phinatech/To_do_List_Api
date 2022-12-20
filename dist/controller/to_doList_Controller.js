"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Searching = exports.Updating = exports.deleting = exports.Posting = exports.Getone = exports.GetAll = void 0;
const to_doList_model_1 = __importDefault(require("../model/to_doList_model"));
const GetAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const todolistData = yield to_doList_model_1.default.find();
        return res.status(200).json({
            message: "Data gotten successfully",
            data: todolistData
        });
    }
    catch (error) {
        return res.status(404).json({
            message: "An error occured while getting this data"
        });
    }
});
exports.GetAll = GetAll;
//To get Get a single data that completed 
const Getone = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getOnedata = yield to_doList_model_1.default.findById(req.params.id);
        return res.status(200).json({
            message: "Data gotten successfully",
            data: getOnedata
        });
    }
    catch (error) {
        return res.status(404).json({
            message: "An error occured while getting this data",
        });
    }
});
exports.Getone = Getone;
const Posting = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { Title, Status, Description, } = req.body;
        const postData = yield to_doList_model_1.default.create({
            Title,
            Status,
            Description,
        }, { timestamps: true });
        return res.status(200).json({
            message: "Data gotten successfully",
            data: postData
        });
    }
    catch (error) {
        return res.status(404).json({
            message: "An error occured while getting this data",
        });
    }
});
exports.Posting = Posting;
const deleting = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deleteData = yield to_doList_model_1.default.findByIdAndDelete(req.params.id);
        return res.status(201).json({
            message: "Data deleted successfully",
            data: deleteData
        });
    }
    catch (error) {
        return res.status(404).json({
            message: "An error occured while deleting this data",
        });
    }
});
exports.deleting = deleting;
const Updating = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { Status } = req.body;
        const updatingData = yield to_doList_model_1.default.findByIdAndUpdate(req.params.id, {
            Status: Status === "Your Task has not been completed" ? "Your Task has not been completed" : "Weldone !!!!Task completed",
        }, { new: true });
        return res.status(200).json({
            message: "Data successfuly Updateded ",
            data: updatingData
        });
    }
    catch (error) {
        return res.status(404).json({
            message: "An error occured while deleting this data",
        });
    }
});
exports.Updating = Updating;
//This is use to show task or list that are done or not done
const Searching = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const search = req.query;
        const searchingData = yield to_doList_model_1.default.find(search);
        return res.status(200).json({
            message: "I love codelab😎😎😎😊😉",
            data: searchingData
        });
    }
    catch (error) {
        return res.status(404).json({
            message: "An error occured while deleting this data",
        });
    }
});
exports.Searching = Searching;
