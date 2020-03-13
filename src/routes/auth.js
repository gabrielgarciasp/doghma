const { Router } = require('express');

const controller = require('./../controllers/auth');

const router = Router();

router.post('/', controller.authenticate);

module.exports = router;
