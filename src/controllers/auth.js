const bcrypt = require('bcrypt');

const userModel = require('./../models/users');
const jwtHelper = require('./../helpers/jwt');

const authenticate = async (req, res) => {
    const user = await userModel.getUserByEmail(req.body.email);

    if (!user) {
        res.status(400).json({ error: 'User not found' });
        return;
    }

    if (!req.body.email || !req.body.password) {
        res.status(400).json({ error: 'Invalid params' });
        return;
    }

    if (!(await bcrypt.compare(req.body.password, user.password))) {
        res.status(400).json({ error: 'Invalid password' });
        return;
    }

    const token = jwtHelper.generateToken({ id: user.id });

    // res.json({ user: { ...user, password: undefined }, token });

    delete user.password;

    res.json({ user: user, token });
};

module.exports = { authenticate };
