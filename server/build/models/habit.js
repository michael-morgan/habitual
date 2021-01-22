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
const base_js_1 = __importDefault(require("./base.js"));
class HabitModel extends base_js_1.default {
    create(properties) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.sql.query('INSERT INTO habits SET ?', properties);
            return properties.uid;
        });
    }
    readAll({ userId }) {
        return __awaiter(this, void 0, void 0, function* () {
            const readAllResult = yield this.sql.query('SELECT * FROM habits WHERE user_uid = ?', userId);
            return readAllResult;
        });
    }
}
exports.default = HabitModel;
