const { Router } = require('express');

const categoriesController = require('../controllers/categoriesController');
const authorizationValidation = require('../middleware/authorizationValidation');
const categoriesMiddleware = require('../middleware/categoriesMiddleware');

const router = Router();

router.post('/', authorizationValidation, 
categoriesMiddleware, categoriesController.categoriesControllerPost);
router.get('/', authorizationValidation, categoriesController.categoriesControllerGet);

module.exports = router;