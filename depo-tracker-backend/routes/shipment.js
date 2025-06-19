// server/routes/shipments.js
const express = require('express');
const router = express.Router();
const Shipment = require('../models/Shipment');

// Create new shipment
router.post('/', async (req, res) => {
  try {
    const shipment = new Shipment(req.body);
    const savedShipment = await shipment.save();
    res.status(201).json(savedShipment);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all shipments
router.get('/', async (req, res) => {
  try {
    const shipments = await Shipment.find().sort({ createdAt: -1 });
    res.json(shipments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
