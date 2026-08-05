// Express application setup — middleware, routes, and error handling
// are wired together here.
const express = require("express");
const cors = require("cors");
const env = require("./config/env");
const routes = require("./routes");
const errorHandler = require("./middleware/error.middleware");

const app = express();

app.use(cors({ origin: env.clientUrl, credentials: true }));
app.use(express.json());

app.use("/api", routes);

app.use(errorHandler);

module.exports = app;
