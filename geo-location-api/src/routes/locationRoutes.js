const express = require("express");
const router = express.Router();
const { createLocation, getLocations, getLocationById, getLocationsByCategory, updateLocation, deleteLocation } = require("../controllers/locationController");
const { validateLocation } = require("../middleware/validate");
const { protect } = require("../middleware/authMiddleware");

// CRUD Routes
router.post("/", protect, validateLocation, createLocation);
router.get("/", getLocations);
router.get("/search", getLocationsByCategory);
router.get("/:id", getLocationById);
router.put("/:id", protect, validateLocation, updateLocation);
router.delete("/:id", protect, deleteLocation);

module.exports = router;
