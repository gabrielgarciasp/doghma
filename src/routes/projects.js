const { Router } = require('express');
const router = Router();

const controller = require('./../controllers/projects');
const authMiddleware = require('./../middleware/auth');

router.use(authMiddleware);

router.get('/', controller.index);

router.get('/:id', controller.show);

router.post('/', controller.store);

router.put('/:id', controller.update);

router.delete('/:id', controller.destroy);

router.get('/client/:clientId', controller.getAllProjectsOfClient);

module.exports = router;
