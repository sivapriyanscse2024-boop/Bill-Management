// Verifies JWT and attaches the authenticated user to the request.
const jwt = require("jsonwebtoken");
const env = require("../config/env");

function authenticate(req, res, next) {
  const header = req.headers.authorization || "";
  const token = header.startsWith("Bearer ") ? header.slice(7) : null;

  if (!token) {
    return res.status(401).json({ success: false, message: "Authentication required" });
  }

  try {
    req.user = jwt.verify(token, env.jwtSecret);
    next();
  } catch (err) {
    return res.status(401).json({ success: false, message: "Invalid or expired token" });
  }
}

module.exports = authenticate;
