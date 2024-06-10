const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Product Schema Model:
const productSchema = new Schema({
    //TODO: Add validations and etc.
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    price: {
        type: Number,
        required: true,
        min: 0.25
    },
    discount: {
        type: Number,
        default: 0
    },
    stock: {
        type: Number,
        required: true,
        min: 0
    },
    tags: [String]
});

//TODO add static or method to apply this formula when getting prod data: cost = price - price(discount)
//TODO add image of products
const ProductSchema = mongoose.model('Product', productSchema);
module.exports = ProductSchema;