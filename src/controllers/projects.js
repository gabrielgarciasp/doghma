const model = require('./../models/projects');

const getAllProjects = async (req, res) => {
    const result = await model.getAllProjects();

    res.setHeader('X-Total-Count', result.length);
    res.setHeader('Access-Control-Expose-Headers', 'X-Total-Count');

    res.json(result);
};

const getProject = async (req, res) => {
    const result = await model.getProject(req.params.id);

    res.json(result);
};

const createProject = async (req, res) => {
    // validations
    req.body.active = req.body.active == 'true' ? 1 : 0;
    req.body.email_aborted = req.body.email_aborted == 'true' ? 1 : 0;

    const result = await model.createProject(req.body);

    res.json(result);
};

const updateProject = async (req, res) => {
    // validations
    req.body.active = req.body.active == 'true' ? 1 : 0;
    req.body.email_aborted = req.body.email_aborted == 'true' ? 1 : 0;

    const result = await model.updateProject(req.params.id, req.body);

    res.json(result);
};

const deleteProject = async (req, res) => {
    const result = await model.deleteProject(req.params.id);

    res.json(result);
};

module.exports = { getAllProjects, getProject, createProject, updateProject, deleteProject };
