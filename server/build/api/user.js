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
const user_js_1 = __importDefault(require("../services/user.js"));
const habit_js_1 = __importDefault(require("./habit.js"));
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.use('/:userId/habits', (req, res, next) => {
    req.userId = req.params.userId;
    next();
}, habit_js_1.default);
router.post('/register', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield user_js_1.default.register({
        'email': req.body.email,
        'password': req.body.password,
        'first_name': req.body.firstName,
        'last_name': req.body.lastName
    });
    res.json(response);
}));
router.post('/login', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield user_js_1.default.verify({
        'email': req.body.email,
        'password': req.body.password
    });
    res.json(response);
}));
exports.default = router;
