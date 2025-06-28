const express = require("express");
const router = express.Router();
const path = require("path");
const Rental = require(path.join(__dirname, "..", "models", "Rental"));
// Create a rental order
router.post("/", async (req, res) => {
  try {
    const rental = new Rental(req.body);
    const savedRental = await rental.save();
    res.status(201).json(savedRental);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get all rentals (for admin view)
router.get("/", async (req, res) => {
  try {
    const rentals = await Rental.find().populate("items.productId");
    res.json(rentals);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
