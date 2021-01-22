"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const mysql_1 = __importDefault(require("mysql"));
const util_1 = __importDefault(require("util"));
var connection = mysql_1.default.createConnection({
    host: process.env.HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PW,
    database: process.env.DB_NAME,
    insecureAuth: true,
});
connection.connect((error) => {
    if (error)
        throw error;
    console.log('Connected to mysql database');
});
connection.query = util_1.default.promisify(connection.query).bind(connection);
exports.default = connection;
