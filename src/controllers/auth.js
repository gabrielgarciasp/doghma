const bcrypt = require('bcrypt');

const userModel = require('./../models/users');
const jwtHelper = require('./../helpers/jwt');

const authenticate = async (req, res) => {
    const user = await userModel.getUserEmail(req.body.email);

    if (!user[0]) {
        res.status(400).json({ error: 'User not found' });
        return;
    }

    if (!req.body.email || !req.body.password) {
        res.status(400).json({ error: 'Invalid params' });
        return;
    }

    if (!(await bcrypt.compare(req.body.password, user[0].password))) {
        res.status(400).json({ error: 'Invalid password' });
        return;
    }

    const token = jwtHelper.generateToken({ id: user[0].id });

    delete user[0].password;

    res.json({ user: user[0], token });
};

module.exports = { authenticate };
