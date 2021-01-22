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
const habit_js_1 = __importDefault(require("../models/habit.js"));
const index_js_1 = __importDefault(require("../database/index.js"));
const uuid_1 = require("uuid");
class HabitService {
    constructor() {
        this.habitModel = new habit_js_1.default(index_js_1.default);
    }
    register(habit) {
        return __awaiter(this, void 0, void 0, function* () {
            habit.uid = uuid_1.v4();
            return this.habitModel.create(habit);
        });
    }
    fetch(habit) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.habitModel.readAll(habit);
        });
    }
}
exports.default = new HabitService();
