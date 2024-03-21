// Import required modules
const express = require('express');

// Create an instance of Express
const app = express();
const port = 3000; // Choose any port you like

// Define routes
app.get('/', (req, res) => {
    res.send('Welcome to my REST API!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
