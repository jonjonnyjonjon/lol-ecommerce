const mongoose = require("mongoose")
const CartItem = require("./CartItem").schema

const UserCart = mongoose.Schema({
    username: String,
    status: String,
    items: [CartItem]
})

module.exports = mongoose.model("UserCart", UserCart)