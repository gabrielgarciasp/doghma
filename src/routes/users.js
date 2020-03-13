const { Router } = require('express');
const router = Router();

const controller = require('./../controllers/users');
const authMiddleware = require('./../middleware/auth');

router.get('/', authMiddleware, controller.getAllUsers);

router.get('/:id', authMiddleware, controller.getUser);

router.post('/', controller.createUser);

router.put('/:id', authMiddleware, controller.updateUser);

router.delete('/:id', authMiddleware, controller.deleteUser);

module.exports = router;
