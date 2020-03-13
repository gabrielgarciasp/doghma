const { Router } = require('express');
const router = Router();

const controller = require('./../controllers/clients');
const authMiddleware = require('./../middleware/auth');

router.use(authMiddleware);

router.get('/', controller.getAllClients);

router.get('/:id', controller.getClient);

router.post('/', controller.createClient);

router.put('/:id', controller.updateClient);

router.delete('/:id', controller.deleteClient);

module.exports = router;
