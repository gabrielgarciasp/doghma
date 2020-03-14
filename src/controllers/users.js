const model = require('./../models/users');

const getAllUsers = async (req, res) => {
    const result = await model.getAllUsers();

    res.json(result);
};

const getUser = async (req, res) => {
    const result = await model.getUser(req.params.id);

    res.json(result);
};

const createUser = async (req, res) => {
    const result = await model.createUser(req.body);

    res.json(result);
};

const updateUser = async (req, res) => {
    const result = await model.updateUser(req.params.id, req.body);

    res.json(result);
};

const deleteUser = async (req, res) => {
    const result = await model.deleteUser(req.params.id);

    res.json(result);
};

module.exports = { getAllUsers, getUser, createUser, updateUser, deleteUser };
