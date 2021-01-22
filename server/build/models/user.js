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
class UserModel extends base_js_1.default {
    create(properties) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.sql.query('INSERT INTO users SET ?', properties);
            return properties.uid;
        });
    }
    read({ email }) {
        return __awaiter(this, void 0, void 0, function* () {
            if (typeof email !== 'undefined') {
                const readResult = yield this.sql.query('SELECT * FROM users WHERE email = ?', email);
                return readResult[0];
            }
        });
    }
}
exports.default = UserModel;
