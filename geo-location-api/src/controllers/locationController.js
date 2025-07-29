const Location = require("../models/Location");

// CREATE
exports.createLocation = async (req, res) => {
  try {
    const location = await Location.create(req.body);
    res.status(201).json(location);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// READ ALL
exports.getLocations = async (req, res) => {
  const locations = await Location.find();
  res.json(locations);
};

// READ BY ID
exports.getLocationById = async (req, res) => {
  try {
    const loc = await Location.findById(req.params.id);
    if (!loc) return res.status(404).json({ message: "Location not found" });
    res.json(loc);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// SEARCH BY CATEGORY
exports.getLocationsByCategory = async (req, res) => {
  const { category } = req.query;
  const locations = await Location.find({ category });
  res.json(locations);
};

// UPDATE
exports.updateLocation = async (req, res) => {
  try {
    const updated = await Location.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: "Location not found" });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// DELETE
exports.deleteLocation = async (req, res) => {
  try {
    const deleted = await Location.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Location not found" });
    res.json({ message: "Location deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
