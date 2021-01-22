import dotenv from 'dotenv';
dotenv.config();
import mysql from 'mysql';
import util from 'util';

var connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PW,
  database: process.env.DB_NAME,
  insecureAuth: true,
});

connection.connect((error) => {
  if (error) throw error;

  console.log('Connected to mysql database');
});

connection.query = util.promisify(connection.query).bind(connection);

export default connection;
