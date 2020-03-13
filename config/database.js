const mysql = require('mysql2/promise');

// const pool = mysql.createPool({
//     host: 'remotemysql.com',
//     user: '2A4TOECQbn',
//     database: '2A4TOECQbn',
//     password: 'GNeQT9nYLh',
//     waitForConnections: true,
//     connectionLimit: 10,
//     queueLimit: 0,
// });

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'doghma',
    password: '',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});

module.exports = pool;
