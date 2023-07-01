const bcrypt = require("bcrypt");
const { User } = require("../../models/user");
const HttpError = require("../../helpers/HttpError");

const register = async (req, res, next) => {
  const { email, password } = req.body;
  const user = User.findOne({ email });
  if (user) {
    throw HttpError(409, "Email in use");
  }
  const hashPassword = await bcrypt.hash(password, 10);
  const newUser = await User.create({ ...req.body, password: hashPassword });
  res.status(201).json({
    email: newUser.email,
    password: newUser.password,
  });
};

module.exports = register;