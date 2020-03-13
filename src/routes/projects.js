const { Router } = require('express');
const router = Router();

const controller = require('./../controllers/projects');
const authMiddleware = require('./../middleware/auth');

router.use(authMiddleware);

router.get('/', controller.getAllProjects);

router.get('/:id', controller.getProject);

router.post('/', controller.createProject);

router.put('/:id', controller.updateProject);

router.delete('/:id', controller.deleteProject);

module.exports = router;
