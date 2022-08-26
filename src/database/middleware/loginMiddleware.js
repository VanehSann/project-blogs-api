const { User } = require('../models');

const loginMiddleware = async (request, response, next) => {
const { email, password } = request.body;
  if (!email || !password) {
  return response.status(400).json({ message: 'Some required fields are missing' }); 
  } 
  const ValidUser = await User.findOne({ where: { email, password } });
  if (!ValidUser) {
    return response.status(400).json({ message: 'Invalid fields' });
  }
  next();
};

module.exports = loginMiddleware;