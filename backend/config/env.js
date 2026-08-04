// Centralized, validated access to process.env values.
const env = {
  port: process.env.PORT,
  mongoUri: process.env.MONGODB_URI,
  jwtSecret: process.env.JWT_SECRET,
};

module.exports = env;
