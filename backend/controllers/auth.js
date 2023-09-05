const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");
const { UnauthenticatedError, BadRequestError} = require('../errors')

const register = async (req, res) => {
  const { name, email, password } = req.body;

  const user = await User.create({ ...req.body });
  const token = user.createJwt();
  res.status(StatusCodes.CREATED).json({ token, user: { name: user.name } });
};
const login = async (req, res) => {
  const {email, password} = req.body
//   console.log(email, password)
  if(!email || !password){
    throw new BadRequestError("Please provide Email and Password!")
  }
  const user = await User.findOne({email})
  if(!user){
    throw new UnauthenticatedError('Invalid Email!')
  }
  const isPasswordCorrect = await user.comparePassword(password)
//   console.log("the password is ", isPasswordCorrect)
  if(!isPasswordCorrect){
    throw new UnauthenticatedError("Invalid password!")
  }
  const token = user.createJwt()
  res.status(StatusCodes.OK).json({user: {name: user.name}, token})
};

module.exports = { register, login };
