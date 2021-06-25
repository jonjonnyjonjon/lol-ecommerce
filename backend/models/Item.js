const mongoose = require("mongoose")

const ItemSchema = mongoose.Schema({
    item_id: {
        type: Number,
        unique: true
    },
    item_name: String,
    description: String,
    price: Number,
    img_url: String,
    stock: Number,
    reserved: [{ username: {type: String, unique: true}, quantity: Number }]
})

module.exports = mongoose.model("Item", ItemSchema)