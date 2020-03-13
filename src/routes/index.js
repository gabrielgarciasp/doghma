const { Router } = require('express');
const router = Router();

const auth = require('./auth');
const user = require('./users');
const client = require('./clients');
const project = require('./projects');

router.use('/authenticate', auth);
router.use('/users', user);
router.use('/clients', client);
router.use('/projects', project);

// return 404
router.use((req, res, next) => {
    res.status(404).json({ error: 'Not found' });
});

// exemplo de erro
// router.use((req, res, next) => {
//     next(new Error('Erro qualquer'));
// });

router.use((err, req, res, next) => {
    res.status(500).json({ error: err.message });
});

module.exports = router;
