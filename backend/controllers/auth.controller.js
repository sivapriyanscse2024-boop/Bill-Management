// Handlers for authentication endpoints (login, logout, refresh, password reset).
const authService = require("../services/auth.service");
const { validateRegister, validateLogin } = require("../validators/auth.validator");
const { success, error } = require("../utils/apiResponse");

function sanitizeUser(user) {
  const { _id, name, email, role, department, phone } = user;
  return { id: _id, name, email, role, department, phone };
}

exports.register = async (req, res, next) => {
  const errors = validateRegister(req.body);
  if (Object.keys(errors).length > 0) {
    return error(res, "Validation failed", 400, errors);
  }

  try {
    const { user, token } = await authService.register(req.body);
    return success(res, { user: sanitizeUser(user), token }, 201);
  } catch (err) {
    next(err);
  }
};

exports.login = async (req, res, next) => {
  const errors = validateLogin(req.body);
  if (Object.keys(errors).length > 0) {
    return error(res, "Validation failed", 400, errors);
  }

  try {
    const { user, token } = await authService.login(req.body);
    return success(res, { user: sanitizeUser(user), token });
  } catch (err) {
    next(err);
  }
};

exports.logout = async (req, res) => {
  return success(res, { message: "Logged out" });
};
