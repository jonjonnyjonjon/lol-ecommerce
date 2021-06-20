const express = require("express")
const router = express.Router()
const Account = require("../models/Account")

// Insert an item
router.post("/", async (req, res) => {

    const account = new Account({
        username: req.body.username,
        password: req.body.password
    })

    try {
        const saveAccount = await account.save()
        res.json(saveAccount)
    } catch (err) {
        res.json({ message: err })
    }
})

module.exports = router