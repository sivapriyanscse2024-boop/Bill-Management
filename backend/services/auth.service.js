// Business logic for authentication (credential checks, token issuance).
const User = require("../models/User.model");
const generateToken = require("../utils/generateToken");

async function register(userData) {
  const existing = await User.findOne({ email: userData.email });
  if (existing) {
    const err = new Error("An account with this email already exists");
    err.statusCode = 409;
    throw err;
  }

  const user = await User.create(userData);
  const token = generateToken({ id: user._id, role: user.role });

  return { user, token };
}

async function login(credentials) {
  const { email, password } = credentials;
  const user = await User.findOne({ email }).select("+password");
  const isMatch = user ? await user.comparePassword(password) : false;

  if (!isMatch) {
    const err = new Error("Invalid email or password");
    err.statusCode = 401;
    throw err;
  }

  const token = generateToken({ id: user._id, role: user.role });

  return { user, token };
}

module.exports = { register, login };
