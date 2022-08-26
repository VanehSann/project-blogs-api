const { Router } = require('express');

const postController = require('../controllers/postController');
const postMiddleware = require('../middleware/postMiddleware');
const authorizationValidation = require('../middleware/authorizationValidation');

const router = Router();

router.post('/', authorizationValidation, postMiddleware, postController.postControllerPost);

module.exports = router;