const mongoose = require("mongoose")

const ItemSchema = mongoose.Schema({
    product_id: Number,
    product_name: String,
    plaintext: String,
    price: Number,
    img_url: String,
    stock: Number
})

module.exports = mongoose.model("Item", ItemSchema)