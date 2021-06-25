const express = require("express")
const router = express.Router()
const axios = require("axios")

const Item = require("../models/Item")
const UserCart = require("../models/UserCart")
const CartItem = require("../models/CartItem")

router.post("/", async (req, res) => {
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

    // If no existing cart, create one for the user + add the item
    if (!userCart) {
        axios.post("http://localhost:5000/cart/createNewCart", {
            username: username,
            addItem: addItem
        })

        axios.post("http://localhost:5000/items/addReserved", {
            username: username,
            item_id: item_id
        })
        
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
            axios.post("http://localhost:5000/cart/updateCartItemQty", {
                username: username,
                item_id: item_id
            })

            // Update quantity of reserved item for user
            axios.post("http://localhost:5000/items/updateReserved", {
                username: username,
                item_id: item_id,
                quantity: 1
            })

            res.json("Another of item has been added to your cart and reserved for you!")

        } else {
            // Item has NOT been added before Item - Push
            axios.post("http://localhost:5000/cart/addCartItem", {
                username: username,
                addItem: addItem
            })

            // Reserve item for user
            axios.post("http://localhost:5000/items/addReserved", {
                username: username,
                item_id: item_id
            })

            res.json("Item has been added to your cart and reserved for you!")
        }
    }
})

module.exports = router