const model = require('./../models/projects');

const getAllProjects = async (req, res) => {
    const result = await model.getAllProjects();

    res.json({ data: result });
};

const getProject = async (req, res) => {
    const result = await model.getProject(req.params.id);

    res.json({ data: result });
};

const createProject = async (req, res) => {
    // validations
    req.body.active = req.body.active == 'true' ? 1 : 0;
    req.body.email_aborted = req.body.email_aborted == 'true' ? 1 : 0;

    const result = await model.createProject(req.body);

    res.json({ data: result });
};

const updateProject = async (req, res) => {
    // validations
    req.body.active = req.body.active == 'true' ? 1 : 0;
    req.body.email_aborted = req.body.email_aborted == 'true' ? 1 : 0;

    const result = await model.updateProject(req.params.id, req.body);

    res.json({ data: result });
};

const deleteProject = async (req, res) => {
    const result = await model.deleteProject(req.params.id);

    res.json({ data: result });
};

module.exports = { getAllProjects, getProject, createProject, updateProject, deleteProject };
