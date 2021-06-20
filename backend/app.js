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
const registrationRoute = require("./routes/registration")
const loginRoute = require("./routes/login")


app.use("/items", itemsRoute)
app.use("/register", registrationRoute)
app.use("/login", loginRoute)

mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => { console.log("Connected to MongoDB!") }
)

app.listen(5000)