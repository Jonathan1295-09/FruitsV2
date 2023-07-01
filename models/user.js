 const mongoose = require('./connection');
const Fruit = require('./fruits');


 const{ Schema , model} = mongoose

 const unserSchema = new Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
 });

 const User = model('user', unserSchema)

 module.exports = User;