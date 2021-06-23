const mongoose = require("mongoose")

const UserCart = mongoose.Schema({
    username: String,
    status: String,
    products: [CartItem]
})

module.exports = mongoose.model("UserCart", UserCart)