const { Router } = require('express');
const router = Router();

const controller = require('./../controllers/projects');

// router.use(function timeLog(req, res, next) {
//     // posso colocar um middleware
//     next();
// });

router.get('/', controller.getAllProjects);

router.get('/:id', controller.getProject);

router.post('/', controller.createProject);

router.put('/:id', controller.updateProject);

router.delete('/:id', controller.deleteProject);

module.exports = router;
