const Router = require('express');
const router = new Router()
const projectRouter = require('./projectsRouter');

router.use('/projects', projectRouter);

module.exports = router;