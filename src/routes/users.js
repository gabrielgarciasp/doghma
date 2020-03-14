const { Router } = require('express');
const router = Router();

const controller = require('./../controllers/users');
const authMiddleware = require('./../middleware/auth');

router.get('/test', controller.getAllUsers);

router.use(authMiddleware);

router.get('/', controller.getAllUsers);

router.get('/:id', controller.getUser);

router.post('/', controller.createUser);

router.put('/:id', controller.updateUser);

router.delete('/:id', controller.deleteUser);

module.exports = router;
