// Application entry point — loads env vars, connects to MongoDB,
// and starts the HTTP server.
require("dotenv").config();
const app = require("./app");

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {});
