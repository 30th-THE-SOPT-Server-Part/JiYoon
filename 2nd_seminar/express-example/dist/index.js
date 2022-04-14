"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)(); //express 객체 받아옴
app.use(express_1.default.json());
//app.use('/api', require('./api'));
app.get('/', (req, res, next) => {
    res.send('Hi! My name is junjuning!');
});
app.listen('8000', () => {
    console.log(`
        #############################################
            🛡️ Server listening on port: 8000 🛡️
        #############################################
    `);
});
//# sourceMappingURL=index.js.map