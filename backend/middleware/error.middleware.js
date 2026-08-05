// Centralized error-handling middleware for consistent API error responses.
const logger = require("../utils/logger");
const { error } = require("../utils/apiResponse");

function errorHandler(err, req, res, next) {
  const statusCode = err.statusCode || 500;
  if (statusCode === 500) logger.error(err);
  return error(res, err.message || "Something went wrong", statusCode);
}

module.exports = errorHandler;
