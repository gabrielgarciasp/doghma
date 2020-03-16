const model = require('./../models/projects');

const index = async (req, res) => {
    const result = await model.index();

    res.json(result);
};

const show = async (req, res) => {
    const result = await model.show(req.params.id);

    if (!result) {
        res.json({ error: 'Project not found' });
        return;
    }

    res.json(result);
};

const store = async (req, res) => {
    // validations
    req.body.active = req.body.active == 'true' ? 1 : 0;
    req.body.email_aborted = req.body.email_aborted == 'true' ? 1 : 0;

    const result = await model.store(req.body);

    res.json(result);
};

const update = async (req, res) => {
    // validations
    req.body.active = req.body.active == 'true' ? 1 : 0;
    req.body.email_aborted = req.body.email_aborted == 'true' ? 1 : 0;

    const result = await model.update(req.params.id, req.body);

    if (!result) {
        res.json({ error: 'Project not found' });
        return;
    }

    res.json(result);
};

const destroy = async (req, res) => {
    const result = await model.destroy(req.params.id);

    res.json(result);
};

const getAllProjectsOfClient = async (req, res) => {
    const result = await model.getAllProjectsOfClient(req.params.clientId);

    res.json(result);
};

module.exports = { index, show, store, update, destroy, getAllProjectsOfClient };
