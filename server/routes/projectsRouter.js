const Router = require('express');
const router = new Router();
const projectController = require('../controllers/projectController')

router.get('/', projectController.getList);
router.post('/', projectController.create); 
router.put(`/:id`, projectController.update); 
router.delete(`/:id`, projectController.delete); 

module.exports = router;