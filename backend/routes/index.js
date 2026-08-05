// Aggregates and mounts all route modules under a single router.
const express = require("express");
const router = express.Router();

router.use("/auth", require("./auth.routes"));
router.use("/users", require("./user.routes"));
router.use("/bills", require("./bill.routes"));
router.use("/claims", require("./claim.routes"));
router.use("/notifications", require("./notification.routes"));
router.use("/reports", require("./report.routes"));
router.use("/ocr", require("./ocr.routes"));

module.exports = router;
