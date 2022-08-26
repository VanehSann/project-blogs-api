const { Router } = require('express');

const loginController = require('../controllers/loginController');
const loginMiddleware = require('../middleware/loginMiddleware');

const router = Router();

router.post('/', loginMiddleware, loginController);

module.exports = router;