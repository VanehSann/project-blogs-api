const errorMessages = require('./errorMessages');

const postMiddleware = async (request, response, next) => {
  const { title, content, categoryIds } = request.body;
  let categoriesArr;
  const arr = [];
  
  if (!title && !content) return response.status(400).json(errorMessages.Missing);
  categoryIds.forEach((categoryId) => {
    categoriesArr = arr.filter((i) => i === categoryId);
  });
  if (categoriesArr.length === 0) {
    return response.status(400).json(errorMessages.NotFoundCategories); 
  }
  
  next();
};

module.exports = postMiddleware;