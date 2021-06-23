const mongoose = require("mongoose")

const AccountSchema = mongoose.Schema({
    username: {
        type: String,
        unique: true
    },
    password: String
})

module.exports = mongoose.model("Account", AccountSchema)