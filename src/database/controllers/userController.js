const tokenGenerate = require('../utils/token');
const { User } = require('../models');

const userController = {
  userControllerPost: async (request, response) => {
  const { email } = request.body;
  await User.create(request.body);
  const token = tokenGenerate(email);
  response.status(201).json(token);
  },
  userControllerGet: async (_request, response) => {
    const ValidUser = await User.findAll({ attributes: { exclude: ['password'] } });
    response.status(200).json(ValidUser);
  },
  
};

module.exports = userController;