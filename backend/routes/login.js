const express = require("express")
const router = express.Router()
const Account = require("../models/Account")

// Get account and login
router.post("/", async (req, res) => {
    try {
        const user = await Account.findOne({ 
            username: req.body.username,
            password: req.body.password
        }, (err, user) => {            
            if (user) {
                res.send({ message: "Login succesful!" })
            } else {
                res.status(404).send({ message: "Username or password is wrong." })
            }
        })

    } catch (err) {
        res.send({ message: err })
    }
})

module.exports = router