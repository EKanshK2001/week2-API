"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const PORT = 3000;
const db_1 = __importDefault(require("./db"));
//import page model
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get('/', (req, res) => {
    res.json({ msg: "hi" });
});
app.get('/read', (req, res) => {
    res.json({ msg: "sup bitches" });
});
app.post('/create', (req, res) => {
    const { title, quote, disclaimer, content } = req.body;
    // res.json({title, quote, disclaimer, content,})
    //save to mongodb
    db_1.default.create({
        title, quote, disclaimer, content,
    });
    res.json({ msg: "saved successfully" });
});
app.put('/update', (req, res) => {
});
app.delete('/delete', (req, res) => {
});
app.listen(PORT, () => {
    console.log(`server running on link : http://localhost:${PORT}/`);
});
