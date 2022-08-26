const errorMessages = {
  messageDisplayName: '"displayName" length must be at least 8 characters long',
  messageEmail: '"email" must be a valid email',
  messagePassword: '"password" length must be at least 6 characters long',
  messageUserAlready: 'User already registered',
  TokenNotFound: { message: 'Token not found' },
  TokenInvalid: { message: 'Expired or invalid token' },
  Missing: { message: 'Some required fields are missing' },
  NotFoundCategories: { message: '"categoryIds" not found' },
};

module.exports = errorMessages;