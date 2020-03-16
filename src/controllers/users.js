const joi = require('@hapi/joi');

const model = require('./../models/users');

const index = async (req, res) => {
    const result = await model.index();

    res.json(result);
};

const show = async (req, res) => {
    const schema = await joi.object({
        id: joi
            .number()
            .integer()
            .required(),
    });

    const { error, value } = schema.validate(req.params);

    if (error) {
        res.status(400).json({ error: error.details[0].message });
        return;
    }

    const result = await model.show(req.params.id);

    if (!result) {
        res.json({ error: 'User not found' });
        return;
    }

    res.json({ result });
};

const store = async (req, res) => {
    const schema = await joi.object({
        name: joi
            .string()
            .max(100)
            .required(),
        email: joi
            .string()
            .email()
            .max(100)
            .required(),
        password: joi
            .string()
            .max(100)
            .required(),
    });

    const { error, value } = schema.validate(req.body);

    if (error) {
        res.status(400).json({ error: error.details[0].message });
        return;
    }

    const result = await model.store(req.body);

    res.json(result);
};

const update = async (req, res) => {
    const schema = await joi.object({
        id: joi
            .number()
            .integer()
            .required(),
        name: joi
            .string()
            .max(100)
            .required(),
        email: joi
            .string()
            .email()
            .max(100)
            .required(),
        password: joi
            .string()
            .max(100)
            .required(),
    });

    const { error, value } = schema.validate({ ...req.params, ...req.body });

    if (error) {
        res.status(400).json({ error: error.details[0].message });
        return;
    }

    const result = await model.update(req.params.id, req.body);

    if (!result) {
        res.json({ error: 'User not found' });
        return;
    }

    res.json(result);
};

const destroy = async (req, res) => {
    const schema = await joi.object({
        id: joi
            .number()
            .integer()
            .required(),
    });

    const { error, value } = schema.validate(req.params);

    if (error) {
        res.status(400).json({ error: error.details[0].message });
        return;
    }

    const result = await model.destroy(req.params.id);

    res.json(result);
};

module.exports = { index, show, store, update, destroy };
