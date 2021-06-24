const mongoose = require("mongoose")

const CartItemSchema = mongoose.Schema({
    item_id: Number,
    item_name: String,
    description: String,
    price: Number,
    img_url: String,
    quantity: Number
})

module.exports = mongoose.model("CartItem", CartItemSchema)