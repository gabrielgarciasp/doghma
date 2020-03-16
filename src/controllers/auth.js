const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const joi = require('@hapi/joi');

const userModel = require('./../models/users');

const authenticate = async (req, res) => {
    const schema = await joi.object({
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

    const user = await userModel.getUserByEmail(req.body.email);

    if (!user) {
        res.status(400).json({ error: 'User not found' });
        return;
    }

    if (!(await bcrypt.compare(req.body.password, user.password))) {
        res.status(400).json({ error: 'Invalid password' });
        return;
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: 86400 });

    // res.json({ user: { ...user, password: undefined }, token });

    delete user.password;

    res.json({ user: user, token });
};

module.exports = { authenticate };
