const { Router } = require('express');

const userController = require('../controllers/userController');
const userMiddleware = require('../service/userMiddleware');

const router = Router();

router.post('/', userMiddleware, userController.userControllerPost);

module.exports = router;