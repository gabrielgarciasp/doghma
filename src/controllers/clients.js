const joi = require('@hapi/joi');

const model = require('./../models/clients');

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
        res.json({ error: 'Client not found' });
        return;
    }

    res.json(result);
};

const store = async (req, res) => {
    const schema = await joi.object({
        name_contact: joi
            .string()
            .max(100)
            .required(),
        company_name: joi
            .string()
            .max(100)
            .required(),
        email: joi
            .string()
            .email()
            .max(100)
            .required(),
        telephone: joi
            .string()
            .max(15)
            .required(),
        address: joi.string().max(100),
        observations: joi.string().empty(''),
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
        name_contact: joi
            .string()
            .max(100)
            .required(),
        company_name: joi
            .string()
            .max(100)
            .required(),
        email: joi
            .string()
            .email()
            .max(100)
            .required(),
        telephone: joi
            .string()
            .max(15)
            .required(),
        address: joi.string().max(100),
        observations: joi.string().empty(''),
    });

    const { error, value } = schema.validate({ ...req.params, ...req.body });

    if (error) {
        res.status(400).json({ error: error.details[0].message });
        return;
    }

    const result = await model.update(req.params.id, req.body);

    if (!result) {
        res.json({ error: 'Client not found' });
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
