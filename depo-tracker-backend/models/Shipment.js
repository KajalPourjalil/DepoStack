const mongoose = require('mongoose');

const ShipmentSchema = new mongoose.Schema({
    sender: {
        name: {type: String, required: true},
        address: {type: String, required: true},
        phone: {type: String, required: true}
    },
    receiver: {
        name: {type: String, required: true},
        address: {type: String, required: true},
        phone: {type: String, required: true}
    },
    description: {type: String, required: true},
    status: { type: String, default: "in transit"},
    trackingNumber: { type: String, unique: true, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    
},
{timestamps: true});

module.exports = mongoose.model('Shipment', ShipmentSchema);