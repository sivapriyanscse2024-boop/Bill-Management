// Centralized application logger.
const logger = {
  info: (...args) => console.log("[info]", ...args),
  error: (...args) => console.error("[error]", ...args),
  warn: (...args) => console.warn("[warn]", ...args),
};

module.exports = logger;
