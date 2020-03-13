const jwtHelper = require('./../helpers/jwt');

const authConfiguration = require('./../config/auth.json');

module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        res.status(401).json({ error: 'No token provided' });
        return;
    }

    const parts = authHeader.split(' ');

    if (!parts.length === 2) {
        res.status(401).json({ error: 'Token error' });
        return;
    }

    const [scheme, token] = parts;

    if (!/^Bearer$/i.test(scheme)) {
        res.status(401).json({ error: 'Token malformated' });
        return;
    }

    jwtHelper.verify(token, authConfiguration.secret, (err, decoded) => {
        if (err) {
            res.status(401).json({ error: 'Token invalid' });
            return;
        }

        req.userId = decoded.id;

        next();
    });
};
