const express = require("express")
const mongoose = require("mongoose")
const axios = require("axios")
const cors = require("cors")
require("dotenv/config")

const app = express()

// Middlewares
app.use(express.json())
app.use(cors())

// Import routes
const itemsRoute = require("./routes/items")
const usersRoute = require("./routes/users")
const cartsRoute = require("./routes/carts")
const addToCartRoute = require("./routes/addToCart")

app.use("/items", itemsRoute)
app.use("/auth", usersRoute)
app.use("/cart", cartsRoute)

app.use("/addToCart", addToCartRoute)

mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
    () => { console.log("Connected to MongoDB!") }
)

app.listen(5000)