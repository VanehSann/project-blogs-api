const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env; 

const tokenGenerate = (email, _password) => {
  const token = jwt.sign({ email }, JWT_SECRET, { expiresIn: '1h' });
  return { token };
};

module.exports = tokenGenerate;