const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Product Schema Model:
const productSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    discount: {
        type: Number
    },
    stock: {
        type: Number
    }
});