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
  userControllerGetById: async (request, response) => {
    const id = Number(request.params.id);
    const ValidUser = await User.findOne({ attributes: { exclude: ['password'] }, where: { id } });
    if (!ValidUser) {
    return response.status(404).json({ message: 'User does not exist' });
    }
    response.status(200).json(ValidUser);
    },
  userControllerDeleteMe: async (request, response) => {
    const data = await User.findOne({ attributes: { exclude: ['password'] } });
    const removed = await User.destroy({ where: { id: data.dataValues.id } });
    response.status(204).json(removed);
    },
};

module.exports = userController;