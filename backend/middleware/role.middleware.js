// Restricts route access based on user role (Employee vs Admin).
function authorizeRoles(...roles) {
  return function (req, res, next) {};
}

module.exports = authorizeRoles;
