"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
//db url
require("dotenv/config");
try {
    //connect to db with url
    mongoose_1.default.connect(process.env.mongoURL).then(() => {
        console.log("database connnected.");
    });
}
catch (error) {
    console.log(error);
}
const pageSchema = new mongoose_1.default.Schema({
    title: { type: String },
    quote: { type: String },
    disclaimer: { type: String },
    content: { type: String },
});
const PageModel = mongoose_1.default.model('Page', pageSchema);
exports.default = PageModel;
