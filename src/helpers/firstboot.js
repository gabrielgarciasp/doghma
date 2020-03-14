const dotenv = require('dotenv');
dotenv.config();

const pool = require('./../config/database');

(async () => {
    const conn = await pool.getConnection();
    const [rows] = await conn.execute('insert into users(name, email, password) values(?, ?, ?)', [
        'User 01',
        'admin@admin.com',
        '$2y$10$BmDh2F3SW/X67AYgHmh1z.D5rSQPPC2H6CFr6DkIs680ThGhAGgGS', // 123456
    ]);

    conn.release();

    console.log('User created');
    console.log({ user: 'User 01', email: 'admin@admin.com', password: '123456' });

    pool.end();
})();
