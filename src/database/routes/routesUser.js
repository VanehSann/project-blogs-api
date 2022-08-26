const { Router } = require('express');

const userController = require('../controllers/userController');
const userMiddleware = require('../middleware/userMiddleware');
const authorizationValidation = require('../middleware/authorizationValidation');

const router = Router();

router.post('/', userMiddleware, userController.userControllerPost);
router.get('/', authorizationValidation, userController.userControllerGet);
router.get('/:id', authorizationValidation, userController.userControllerGetById);

module.exports = router;