// Application entry point — loads env vars, connects to MongoDB,
// and starts the HTTP server.
require("dotenv").config();
const app = require("./app");
const connectDB = require("./config/db");
const env = require("./config/env");
const logger = require("./utils/logger");

connectDB()
  .then(() => {
    app.listen(env.port, () => logger.info(`Server running on port ${env.port}`));
  })
  .catch((err) => {
    logger.error("Failed to connect to MongoDB", err);
    process.exit(1);
  });
