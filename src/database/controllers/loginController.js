const tokenGenerate = require('../utils/token');

const loginController = async (request, response) => {
const { email } = request.body;

  const token = tokenGenerate(request.email);
  response.status(200).json(token);
};

module.exports = loginController;