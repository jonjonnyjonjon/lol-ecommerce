const express = require("express")
const bcrypt = require("bcrypt")
const { sign } = require("jsonwebtoken")

const Account = require("../models/Account")

const router = express.Router()

// Get account and login
router.post("/login", async (req, res) => {
 
    const { username, password } = req.body
    const user = await Account.findOne({ 
        username: username
    })
        .catch(err => console.log(err))

    // Check if there is such user with username
    if (!user) {
        res.json({ error: "User does not exist." })
    } else {
        // Check if password is same
        const match = await bcrypt.compare(password, user.password)
        
        if (!match) res.json({ error: "Username and password do not match!" })
        
        const jwt = sign(
            { username: user.username },
            "dummySecretPlsChange"
            )
            res.json({ username: username, token: jwt })
    }
})

// Insert an item
router.post("/registration", async (req, res) => {
    const { username, password } = req.body
    const hash = await bcrypt.hash(password, 10)
    const account = new Account({
        username: username,
        password: hash
    })

    try {
        const saveAccount = await account.save()
        res.json(saveAccount)
    } catch (err) {
        res.json({ error: err })
    }
})

module.exports = router