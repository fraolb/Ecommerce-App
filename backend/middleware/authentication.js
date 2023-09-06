const User = require('../models/User');
const jwt = require('jsonwebtoken');
const { BadRequestError, UnauthenticatedError } = require('../errors');

const auth = async (req, res, next) => {
  const authHeader = req.header('Authorization'); // Use 'Authorization'

//   console.log(authHeader);
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    throw new UnauthenticatedError('Authentication Invalid');
  }
  
  const token = authHeader.split(' ')[1]; // Split by space and get the second part
//   console.log(token);
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    // console.log(payload)
    req.user = { userId: payload.userId, name: payload.name };
    next();
  } catch (error) {
    throw new UnauthenticatedError('Authentication Invalid!');
  }
};

module.exports = auth;
