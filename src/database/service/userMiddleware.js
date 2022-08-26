const { User } = require('../models');

const errorMessages = require('./errorMessages');

const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
const userMiddleware = async (request, response, next) => {
  const { displayName, email, password } = request.body;
  
if (displayName.length < 8) {
  return response.status(400).json({ message: errorMessages.messageDisplayName });
}

if (!emailRegex.test(email)) {
  return response.status(400).json({ message: errorMessages.messageEmail }); 
}

if (password.length < 6) {
  return response.status(400).json({ message: errorMessages.messagePassword });
}

const ValidUser = await User.findOne({ where: { email, password } });
  if (ValidUser) return response.status(409).json({ message: errorMessages.messageUserAlready });

  next();
};

module.exports = userMiddleware;