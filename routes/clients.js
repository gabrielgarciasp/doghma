const { Router } = require('express');
const router = Router();

const controller = require('./../controllers/clients');

// router.use(function timeLog(req, res, next) {
//     // posso colocar um middleware
//     next();
// });

router.get('/', controller.getAllClients);

router.get('/:id', controller.getClient);

router.post('/', controller.createClient);

router.put('/:id', controller.updateClient);

router.delete('/:id', controller.deleteClient);

module.exports = router;
