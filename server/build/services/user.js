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
const user_js_1 = __importDefault(require("../models/user.js"));
const index_js_1 = __importDefault(require("../database/index.js"));
const uuid_1 = require("uuid");
const bcrypt_1 = __importDefault(require("bcrypt"));
class UserService {
    constructor() {
        this.userModel = new user_js_1.default(index_js_1.default);
    }
    register(user) {
        return __awaiter(this, void 0, void 0, function* () {
            user.uid = uuid_1.v4();
            const saltRounds = 10;
            const plainTextPassword = user.password;
            user.password = yield bcrypt_1.default.hash(plainTextPassword, saltRounds);
            return this.userModel.create(user);
        });
    }
    verify(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const storedUser = yield this.userModel.read(user);
            const match = yield bcrypt_1.default.compare(user.password, storedUser.password);
            return match && storedUser.uid;
        });
    }
}
exports.default = new UserService();
