const express = require('express')
const cors = require('cors')
require('dotenv').config()
const connectDB = require('./config/database')
const router = require('./routers/index')

const app = express()
app.use(cors())
app.use("/api",router)
const PORT = 8080 || process.env.PORT

connectDB().then(()=>{
    app.listen(PORT,() =>{
        console.log("Connect to DB index.js")
        console.log(`Server is running on port ${PORT}`)
    })
})
