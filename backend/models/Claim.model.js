// Mongoose schema for expense claims (grouped bills submitted for approval).
const mongoose = require("mongoose");

const claimSchema = new mongoose.Schema({}, { timestamps: true });

module.exports = mongoose.model("Claim", claimSchema);
