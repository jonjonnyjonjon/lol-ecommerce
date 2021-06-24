const express = require("express")
const router = express.Router()
const Item = require("../models/Item")

// Get all items
router.get("/", async (req, res) => {
    try {
        const items = await Item.find()
        res.json(items)
    } catch (err) {
        res.json({ message: err })
    }
})

// Get an item by item name
router.get("/:item_name", async (req, res) => {
    try {
        const item = await Item.find({ 
            item_name: { $regex: req.params.item_name, $options: "i" } 
        })
        res.json(item)
    } catch (err) {
        res.json({ message: err })
    }
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

    try {
        const savedItem = await item.save()
        res.json(savedItem)
    } catch (err) {
        res.json({ message: err })
    }
})

// Delete an item
// router.delete("/:item_id", async (req, res) => {
//     try {
//         const removeItem = await Item.remove({ _id: req.params.item_id })
//         res.json(removeItem)
//     } catch (err) {
//         res.json({ message: err })
//     }
// })

// Update an item
// router.patch("/:item_id", async (req, res) => {
//     try {
//         const updateItem = await Item.updateOne(
//             {_id: req.params.item_id },
//             { $set: { title: req.body.item_name }}
//         )
//         res.json(updateItem)
//     } catch (err) {
//         res.json({ message: err })
//     }
// })

module.exports = router