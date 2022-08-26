const tokenGenerate = require('../utils/token');
const { User } = require('../models');

const userController = {
  userControllerPost: async (request, response) => {
  const { email } = request.body;
  await User.create(request.body);
  const token = tokenGenerate(email);
  response.status(201).json(token);
  },
  
};

module.exports = userController;