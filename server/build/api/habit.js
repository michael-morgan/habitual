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
const habit_js_1 = __importDefault(require("../services/habit.js"));
const log_js_1 = __importDefault(require("./log.js"));
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.userId;
    const response = yield habit_js_1.default.fetch({ userId });
    res.json(response);
}));
router.get('/:habitId', (req, res) => {
    const userId = req.userId;
});
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.userId;
    const response = yield habit_js_1.default.register({
        'user_uid': userId,
        'name': req.body.name,
        'description': req.body.description
    });
    res.json(response);
}));
router.use('/:habitId/logs', (req, res, next) => {
    req.habitId = req.params.habitId;
    next();
}, log_js_1.default);
exports.default = router;
