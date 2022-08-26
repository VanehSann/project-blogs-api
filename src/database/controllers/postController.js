const { BlogPost, User, Category, PostCategory } = require('../models');
const decodeToken = require('../utils/decodeToken');

const postController = {
  postControllerPost: async (request, response) => {
    const arr = [];
    const { categoryIds } = request.body;
    const email = decodeToken(request.headers.authorization);
    const data = await User.findOne({ where: { email }, attributes: { exclude: ['password'] } });
    const ValidCategory = await Category.findAll();   
    await ValidCategory.map((category) => arr.push(category.dataValues.id));     
    categoryIds.forEach((categoryId) => {
      PostCategory.create({ postId: 3, categoryId }); 
    });
    response.status(201).json(await BlogPost.create({ 
        id: request.params.id,
        ...request.body,
        userId: data.dataValues.id,
        updated: new Date(),
        published: new Date(), 
      }));
  },
  postControllerGet: async (request, response) => {
    const resultAllPosts = await BlogPost.findAll({ 
      include: [{ model: User, as: 'user', attributes: { exclude: ['password'] } },
       { model: Category, as: 'categories' }],
      });
    response.status(200).json(resultAllPosts);
    },
};

module.exports = postController;