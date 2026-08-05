// Request payload validation rules for authentication endpoints.
const ROLES = ["employee", "admin"];

function validateRegister(payload = {}) {
  const errors = {};
  const { name, email, password, role } = payload;

  if (!name || !name.trim()) errors.name = "Full name is required";
  if (!email) errors.email = "Email is required";
  else if (!/\S+@\S+\.\S+/.test(email)) errors.email = "Enter a valid email";
  if (!password) errors.password = "Password is required";
  else if (password.length < 6) errors.password = "Use at least 6 characters";
  if (role && !ROLES.includes(role)) errors.role = "Invalid role";

  return errors;
}

function validateLogin(payload = {}) {
  const errors = {};
  const { email, password } = payload;

  if (!email) errors.email = "Email is required";
  if (!password) errors.password = "Password is required";

  return errors;
}

module.exports = { validateRegister, validateLogin };
