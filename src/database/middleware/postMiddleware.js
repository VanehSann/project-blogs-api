const errorMessages = require('./errorMessages');
const { Category } = require('../models');

const postMiddleware = async (request, response, next) => {
  const { title, content, categoryIds } = request.body;
  const ValidCategory = await Category.findAll();   
  const arr = [];
  let categoriesArr;
    await ValidCategory.map((cat) => arr.push(cat.dataValues.id));     
  
    if (!title && !content) return response.status(400).json(errorMessages.Missing);
    categoryIds.forEach((categoryId) => {
      categoriesArr = arr.filter((i) => i === categoryId);
      arr.push(categoryId);
    });
    if (categoriesArr.length === 0) {
      return response.status(400).json(errorMessages.NotFoundCategories); 
    }
  
  next();
};

module.exports = postMiddleware;