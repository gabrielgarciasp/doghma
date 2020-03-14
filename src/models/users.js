const bcrypt = require('bcrypt');

const pool = require('./../config/database');

const getAllUsers = async () => {
    const conn = await pool.getConnection();
    const [rows] = await conn.execute('select id, name, email, created_at, updated_at from users');

    conn.release();

    return rows;
};

const getUser = async id => {
    const conn = await pool.getConnection();
    const [rows] = await conn.execute('select id, name, email, created_at, updated_at from users where id = ?', [id]);

    conn.release();

    return rows[0];
};

const getUserByEmail = async email => {
    const conn = await pool.getConnection();
    const [rows] = await conn.execute('select * from users where email = ?', [email]);

    conn.release();

    return rows[0];
};

const createUser = async data => {
    const hash = await bcrypt.hash(data.password, 10);
    data.password = hash;

    const conn = await pool.getConnection();
    const [rows] = await conn.execute('insert into users(name, email, password) values(?, ?, ?)', [
        data.name,
        data.email,
        data.password,
    ]);

    conn.release();

    return getUser(rows.insertId);
};

const updateUser = async (id, data) => {
    const hash = await bcrypt.hash(data.password, 10);
    data.password = hash;

    const conn = await pool.getConnection();
    const [rows] = await conn.execute('update users set name=?, email=?, password=? where id=?', [
        data.name,
        data.email,
        data.password,
        id,
    ]);

    conn.release();

    return getUser(id);
};

const deleteUser = async id => {
    const conn = await pool.getConnection();
    const [rows] = await conn.execute('delete from users where id=?', [id]);

    conn.release();

    return { message: 'deleted' };
};

module.exports = { getAllUsers, getUser, getUserByEmail, createUser, updateUser, deleteUser };
