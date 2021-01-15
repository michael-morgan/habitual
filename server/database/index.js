import mysql from 'mysql';
import util from 'util';

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'habitual'
});

connection.connect(error => {
    if (error) {
        throw error;
    }
});

connection.query = util.promisify(connection.query).bind(connection);

export default connection;