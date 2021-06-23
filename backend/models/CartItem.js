const mongoose = require("mongoose")

const CartItemSchema = mongoose.Schema({
    product_id: Number,
    product_name: String,
    quantity: Number,
    price: Number
})

module.exports = mongoose.model("CartItem", CartItemSchema)