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
    item.save()

    const updateStock = await Item.updateOne({
        item_id: item_id
    }, {"$inc": { stock: -1 }})

    res.json(updateStock)
})

// Update user's reserved amount - can be +1 or -1
router.post("/updateReserved", async (req, res) => {
    const { username, item_id, quantity } = req.body

    // Update reserved amount for user
    await Item.updateOne({ 
        "item_id": item_id, 
        "reserved.username": username 
    }, { "$inc": { "reserved.$.quantity": quantity } }
    )

    // Reduce stock count
    const updateStock = await Item.updateOne({
        item_id: item_id
    }, {"$inc": { stock: -quantity }})

    res.json(updateStock)
})

// Remove reserved items
router.post("/deleteReserved", async (req, res) => {
    const { username, item_id } = req.body

    // Add back the reserved amount to stock count
    const userReserved = await Item.findOne({ item_id: item_id })
        .select({reserved: {$elemMatch: {username : username}}})
    const qtyToOffset = userReserved.reserved[0].quantity

    const updateStock = await Item.updateOne({
        item_id: item_id
    }, {"$inc": { stock: qtyToOffset }})

    // Remove reserved entry for user
    await Item.updateOne({ "item_id": item_id }, {
        "$pull": { "reserved": {"username": username} }
    })

    res.json(updateStock)
})

module.exports = router