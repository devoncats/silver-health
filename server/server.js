// laod environment variables
require('dotenv').config()

// import dependencies
const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const connectDB = require('./config/connectDB')
const userRouter = require('./routes/User')

// create express app
const app = express()

// configure express
app.use(express.json())
app.use(cookieParser())
app.use(cors({
  origin: true,
  credentials: true
}))
app.use('/uploads', express.static('uploads'))

// connect to database
connectDB()

// routing
app.use('/user', userRouter)

// start the server
app.listen(process.env.PORT)
