const model = require('./../models/clients');

const getAllClients = async (req, res) => {
    const result = await model.getAllClients();

    res.setHeader('X-Total-Count', result.length);
    res.setHeader('Access-Control-Expose-Headers', 'X-Total-Count');

    res.json({ data: result });
};

const getClient = async (req, res) => {
    const result = await model.getClient(req.params.id);

    res.json({ data: result });
};

const createClient = async (req, res) => {
    const result = await model.createClient(req.body);

    res.json({ data: result });
};

const updateClient = async (req, res) => {
    const result = await model.updateClient(req.params.id, req.body);

    res.json({ data: result });
};

const deleteClient = async (req, res) => {
    const result = await model.deleteClient(req.params.id);

    res.json({ data: result });
};

module.exports = { getAllClients, getClient, createClient, updateClient, deleteClient };
