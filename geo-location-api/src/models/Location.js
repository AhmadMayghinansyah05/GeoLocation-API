const mongoose = require("mongoose");

const locationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  latitude: { type: Number, required: true, min: -90, max: 90 },
  longitude: { type: Number, required: true, min: -180, max: 180 },
  description: String,
  category: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model("Location", locationSchema);
