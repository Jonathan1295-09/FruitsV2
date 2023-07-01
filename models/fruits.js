const mongoose = require('./connection'); // importing the mongoose from connection

// Schema which will go into model //
const fruitSchema = new mongoose.Schema({
    name: String,
    color: String,
    readyToEat: Boolean,
    username: String, 
});

// fruit model //
const Fruit = mongoose.model('fruit', fruitSchema);

module.exports = Fruit;