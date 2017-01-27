"use strict";
const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const ProductSchema = Schema({
    name: String,
    picture: String,
    price: {type: Number, default: 0},
    category: {type: String, enum: ['laptops','phones','accesories']},
    description: String
});

module.exports = mongoose.model('Product', ProductSchema);