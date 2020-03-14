const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userModel = require('./../models/users');

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

    const token = jwt.generateToken({ id: user.id }, process.env.JWT_SECRET, { expiresIn: 86400 });

    // res.json({ user: { ...user, password: undefined }, token });

    delete user.password;

    res.json({ user: user, token });
};

module.exports = { authenticate };
