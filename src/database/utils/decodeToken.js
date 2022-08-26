const jwt = require('jsonwebtoken');

const decodeToken = (authorization) => {
  const { email } = jwt.decode(authorization);
  return email;
};

module.exports = decodeToken;