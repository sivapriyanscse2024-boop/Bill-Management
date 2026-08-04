// Mongoose schema for uploaded expense bills (food, fuel, toll, hotel, etc.).
const mongoose = require("mongoose");

const billSchema = new mongoose.Schema({}, { timestamps: true });

module.exports = mongoose.model("Bill", billSchema);
