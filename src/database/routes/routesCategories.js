const { Router } = require('express');

const categoriesController = require('../controllers/categoriesController');
const authorizationValidation = require('../middleware/authorizationValidation');

const router = Router();

router.post('/', authorizationValidation, categoriesController.categoriesControllerPost);
router.get('/', authorizationValidation, categoriesController.categoriesControllerGet);

module.exports = router;