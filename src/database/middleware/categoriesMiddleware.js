const errorMessages = require('./errorMessages');

const categoriesMiddleware = async (request, response, next) => {
  const { name } = request.body;
  
  if (!name) {
    return response.status(400).json(errorMessages.nameRequired);
  }
  next();
};

module.exports = categoriesMiddleware;