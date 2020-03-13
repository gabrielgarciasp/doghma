const pool = require('./../config/database');

const getAllClients = async () => {
    const conn = await pool.getConnection();
    const [rows] = await conn.execute('select * from clients');

    conn.release();

    return rows;
};

const getClient = async id => {
    const conn = await pool.getConnection();
    const [rows] = await conn.execute('select * from clients where id = ?', [id]);

    conn.release();

    return rows;
};

const createClient = async data => {
    const conn = await pool.getConnection();
    const [
        rows,
    ] = await conn.execute(
        'insert into clients(name_contact, company_name, email, telephone, address, observations) values(?, ?, ?, ?, ?, ?)',
        [data.name_contact, data.company_name, data.email, data.telephone, data.address, data.observations]
    );

    conn.release();

    return getClient(rows.insertId);
};

const updateClient = async (id, data) => {
    const conn = await pool.getConnection();
    const [
        rows,
    ] = await conn.execute(
        'update clients set name_contact=?, company_name=?, email=?, telephone=?, address=?, observations=? where id=?',
        [data.name_contact, data.company_name, data.email, data.telephone, data.address, data.observations, id]
    );

    conn.release();

    return getClient(id);
};

const deleteClient = async id => {
    const conn = await pool.getConnection();
    const [rows] = await conn.execute('delete from clients where id=?', [id]);

    conn.release();

    return { message: 'deleted' };
};

module.exports = { getAllClients, getClient, createClient, updateClient, deleteClient };
