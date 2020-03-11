const { Router } = require('express');
const router = Router();

const controller = require('./../controllers/users');

// router.use(function timeLog(req, res, next) {
//     // posso colocar um middleware
//     next();
// });

router.get('/', controller.getAllUsers);

router.get('/:id', controller.getUser);

router.post('/', controller.createUser);

router.put('/:id', controller.updateUser);

router.delete('/:id', controller.deleteUser);

module.exports = router;
