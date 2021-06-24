const express = require("express")
const router = express.Router()
const Item = require("../models/Item")
const UserCart = require("../models/UserCart")
const CartItem = require("../models/CartItem")

router.post("/", async (req, res) => {
    const userCart = await UserCart.findOne({username: req.body.username})
    res.json(userCart)
})

router.post("/add", async (req,res) => {
    const { username, item_id } = req.body

    // Find the item that user wants to add
    const item = await Item.findOne({ item_id: item_id })

    const addItem = new CartItem({
        item_id: item.item_id,
        item_name: item.item_name,
        description: item.description,
        price: item.price,
        img_url: item.img_url,
        quantity: 1
    })

    // Check if user has an existing cart
    const userCart = await UserCart.findOne({
        username: username,
        status: "active"
    })

    // If no existing cart, create one for the user and add the item in it
    if (!userCart) {
        const newCart = new UserCart({
            username: username,
            status: "active",
            items: [addItem]
        })
    
        try {
            const savedNewCart = await newCart.save()
            res.json(savedNewCart)
        } catch (err) {
            res.json({ message: err })
        }
    } else {
        // Check if item is in user's cart
        var isItemAdded = false
        for (let i = 0; i < userCart.items.length; i++) {
            if (userCart.items[i].item_id == item_id) {
                isItemAdded = true
            }
        }

        if (isItemAdded) {
            // Item has been added already - Increment
            await UserCart.updateOne({ "username": username, "items.item_id": item_id }, {"$inc": {
                "items.$.quantity": 1
            }})
            res.json(`Another Item ${item_id} has been added.`)
        } else {
            // Item has NOT been added before Item - Push
            try {
                userCart.items.push(addItem)
                userCart.save()
                res.json(userCart)
            } catch (err) {
                res.json({ message: err })
            }
        }
    }
})

module.exports = router