const authorizationValidation = (request, response, next) => {
const { authorization } = request.headers;
    if (!authorization) {
   return response.status(401).json({
      message: 'Token not found',
    }); 
  }
    if (authorization.length < 16) {
   return response.status(401).json({
      message: 'Expired or invalid token',
    }); 
  }
  next();
};

module.exports = authorizationValidation;