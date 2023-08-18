const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    id: String,
    productUrl: String,
    title: String,
    price: String,
    videoId: String,
});

module.exports = mongoose.model('Product', ProductSchema, "products");