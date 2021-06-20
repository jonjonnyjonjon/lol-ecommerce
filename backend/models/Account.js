const mongoose = require("mongoose")

const AccountSchema = mongoose.Schema({
    username: String,
    password: String
})

module.exports = mongoose.model("Account", AccountSchema)