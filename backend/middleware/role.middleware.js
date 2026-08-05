// Restricts route access based on user role (Employee vs Admin).
function authorizeRoles(...roles) {
  return function (req, res, next) {
    if (!req.user || !roles.includes(req.user.role)) {
      return res.status(403).json({ success: false, message: "Insufficient permissions" });
    }
    next();
  };
}

module.exports = authorizeRoles;
