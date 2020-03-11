const pool = require('./../config/database');

const getAllUsers = async () => {
    const conn = await pool.getConnection();
    const [rows, fields] = await conn.execute('select * from users');

    return rows;
};

const getUser = async id => {
    const conn = await pool.getConnection();
    const [rows, fields] = await conn.execute('select * from users where id = ?', [id]);

    return rows;
};

const createUser = async data => {
    const conn = await pool.getConnection();
    const [rows] = await conn.execute('insert into users(name, email, password) values(?, ?, ?)', [
        data.name,
        data.email,
        data.password,
    ]);

    return getUser(rows.insertId);
};

const updateUser = async (id, data) => {
    const conn = await pool.getConnection();
    const [rows] = await conn.execute('update users set name=?, email=?, password=? where id=?', [
        data.name,
        data.email,
        data.password,
        id,
    ]);

    return getUser(id);
};

const deleteUser = async id => {
    const conn = await pool.getConnection();
    const [rows] = await conn.execute('delete from users where id=?', [id]);

    return { message: 'deleted' };
};

module.exports = { getAllUsers, getUser, createUser, updateUser, deleteUser };
