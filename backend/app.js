const express = require("express")
const app = express()
const mongoose = require("mongoose")
const cors = require("cors")
require("dotenv/config")

// Middlewares
app.use(express.json())
app.use(cors())

// Import routes
const itemsRoute = require("./routes/items")

app.use("/items", itemsRoute)

app.get("/", (req, res) => {
    res.send("Home page")
})

mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => { console.log("Connected to MongoDB!") }
)

app.listen(5000)