const express = require("express")
const router = express.Router()

const UserCart = require("../models/UserCart")

// Get user's cart by username
router.post("/", async (req, res) => {
    const userCart = await UserCart.findOne({username: req.body.username})
    res.json(userCart)
})

// Create new cart for user
router.post("/createNewCart", async (req, res) => {
    const { username, addItem } = req.body

    const newCart = new UserCart({
        username: username,
        status: "active",
        items: [addItem]
    })

    const savedNewCart = await newCart.save()
    res.json(savedNewCart)
})

// Add item into user's cart
router.post("/addCartItem", async (req, res) => {
    const { username, addItem } = req.body

    const userCart = await UserCart.findOne({ username: username })
    userCart.items.push(addItem)
    const savedUserCart = userCart.save()
    res.json(savedUserCart)
})

// Update cart item's quantity in user's cart
router.post("/updateCartItemQty", async (req, res) => {
    const { username, item_id } = req.body

    const updateUserCart = await UserCart.updateOne({ 
        "username": username, 
        "items.item_id": item_id 
    }, { "$inc": { "items.$.quantity": 1 } }
    )
    res.json(updateUserCart)
})

module.exports = router