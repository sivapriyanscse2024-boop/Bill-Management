// Standardized success/error response envelope helpers.
function success(res, data, statusCode = 200) {
  return res.status(statusCode).json({ success: true, data });
}

function error(res, message, statusCode = 500, errors) {
  return res.status(statusCode).json({
    success: false,
    message,
    ...(errors ? { errors } : {}),
  });
}

module.exports = { success, error };
