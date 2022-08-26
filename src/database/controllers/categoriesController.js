const { Category } = require('../models');

const categoriesController = {
  categoriesControllerPost: async (request, response) => {
  await Category.create(request.body);
  response.status(201).json(request.body);
  },
  
  categoriesControllerGet: async (_request, response) => {
    const ValidCategory = await Category.findAll();
    response.status(200).json(ValidCategory);
    },

};

module.exports = categoriesController;