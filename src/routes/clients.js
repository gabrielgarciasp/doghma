const { Router } = require('express');
const router = Router();

const controller = require('./../controllers/clients');
const authMiddleware = require('./../middleware/auth');

router.use(authMiddleware);

router.get('/', controller.index);

router.get('/:id', controller.show);

router.post('/', controller.store);

router.put('/:id', controller.update);

router.delete('/:id', controller.destroy);

module.exports = router;
