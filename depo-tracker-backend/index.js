const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

//Middleware to parse JSON bodies
app.use(express.json());

//Test route
app.get('/', (req, res) => {
    res.send('Depo Tracker API is running');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Error connecting to MongoDB:', err);
}   
);

// Import shipment routes
const shipmentRoutes = require('./routes/shipments');
app.use('/api/shipments', shipmentRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});