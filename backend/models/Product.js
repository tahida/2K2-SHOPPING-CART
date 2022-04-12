const mongoose = require('mongoose');

// membuat schema database mongoose
const productSchema = new mongoose.Schema({
    // membuat spesifikasi skema data untuk di inputkan ke database 
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price:{
        type: Number,
        required: true,
    },
    countInStock: {
        type: Number,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },
});

// membuat model database
const Product = mongoose.model("product", productSchema);
module.exports = Product;