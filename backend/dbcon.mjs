import mysql from 'mysql';

var pool = mysql.createPool({
    connectionLimit : 10,
    host            : 'localhost',
    user            : 'root',
    password        : 'Beto+327258',
    database        : 'students_db'
})

export { pool };