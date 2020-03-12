const { Router } = require('express');
const router = Router();

const user = require('./users');
const client = require('./clients');

router.use('/users', user);
router.use('/clients', client);

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
