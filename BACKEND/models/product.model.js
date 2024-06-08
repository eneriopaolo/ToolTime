const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Product Schema Model:
const productSchema = new Schema({
    //TODO: Add validations and etc.
    name: {
        type: String
    },
    description: {
        type: String
    },
    price: {
        type: Number
    },
    discount: {
        type: Number,
        default: 0
    },
    stock: {
        type: Number
    }
});

const ProductSchema = mongoose.model('Product', productSchema);
module.exports = ProductSchema;