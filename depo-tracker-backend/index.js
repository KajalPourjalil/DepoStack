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