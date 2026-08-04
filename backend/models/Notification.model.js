// Mongoose schema for in-app/email notifications.
const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema({}, { timestamps: true });

module.exports = mongoose.model("Notification", notificationSchema);
