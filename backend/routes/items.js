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

// Get an item by product name
router.get("/:product_name", async (req, res) => {
    try {
        const item = await Item.find({ 
            product_name: { $regex: req.params.product_name, $options: "i" } 
        })
        res.json(item)
    } catch (err) {
        res.json({ message: err })
    }
})

// Insert an item
router.post("/", async (req,res) => {
    const item = new Item({
        product_id: req.body.product_id,
        product_name: req.body.product_name,
        plaintext: req.body.plaintext,
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
// router.delete("/:product_id", async (req, res) => {
//     try {
//         const removeItem = await Item.remove({ _id: req.params.product_id })
//         res.json(removeItem)
//     } catch (err) {
//         res.json({ message: err })
//     }
// })

// Update an item
// router.patch("/:product_id", async (req, res) => {
//     try {
//         const updateItem = await Item.updateOne(
//             {_id: req.params.product_id },
//             { $set: { title: req.body.product_name }}
//         )
//         res.json(updateItem)
//     } catch (err) {
//         res.json({ message: err })
//     }
// })

module.exports = router