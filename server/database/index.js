import mysql from 'mysql';

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

export default connection;