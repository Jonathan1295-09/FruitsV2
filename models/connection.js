require('dotenv').config();
const mongoose = require('mongoose');

const DATABASE_URL = process.env.DATABASE_URL;

// Established a connection 
mongoose.connect(DATABASE_URL);

// Logs for connection (on open, on close, on error)
mongoose.connection
    .on('open', () => console.log("Connected to Mongoose"))
    .on('close', () => console.log("Disconnected from Mongoose"))
    .on('error', (error) => console.log(error));
module.exports = mongoose;