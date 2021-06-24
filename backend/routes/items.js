const express = require("express")
const router = express.Router()
const Item = require("../models/Item")

// Get all items
router.get("/", async (req, res) => {
    const items = await Item.find()
    res.json(items)
})

// Get an item by item name
router.get("/:item_name", async (req, res) => {
    const item = await Item.find({ 
        item_name: { $regex: req.params.item_name, $options: "i" } 
    })
    res.json(item)
})

// Insert an item
router.post("/", async (req,res) => {
    const item = new Item({
        item_id: req.body.item_id,
        item_name: req.body.item_name,
        description: req.body.description,
        price: req.body.price,
        img_url: req.body.img_url,
        stock: req.body.stock
    })

    const savedItem = item.save()
    res.json(savedItem)
})

// Reserve items
router.post("/addReserved", async (req, res) => {
    const { username, item_id } = req.body

    const item = await Item.findOne({ item_id: item_id })
    item.reserved.push({ username: username, quantity: 1 })
    const savedItem = item.save()
    res.json(savedItem)
})

// Update user's reserved amount
router.post("/updateReserved", async (req, res) => {
    const { username, item_id } = req.body

    const updateReserved = await Item.updateOne({ 
        "item_id": item_id, 
        "reserved.username": username 
    }, { "$inc": { "reserved.$.quantity": 1 } }
    )
    res.json(updateReserved)
})

// Remove reserved items
router.post("/deleteReserved", async (req, res) => {
    const { username, item_id } = req.body

    const removeReserved = await Item.updateOne({ "item_id": item_id }, {
        "$pull": { "reserved": {"username": username} }
    })
    res.json(removeReserved)
})

module.exports = router