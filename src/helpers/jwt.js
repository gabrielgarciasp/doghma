const jwt = require('jsonwebtoken');

const generateToken = params => {
    return jwt.sign(params, process.env.JWT_SECRET, {
        expiresIn: 86400,
    });
};

module.exports = { generateToken, verify: jwt.verify };
