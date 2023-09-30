// laod environment variables
require('dotenv').config()

// import dependencies
const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const connectDB = require('./config/connectDB')
const usersController = require('./controllers/usersController')
const requireAuth = require('./middleware/requireAuth')

// create express app
const app = express()

// configure express
app.use(express.json())
app.use(cookieParser())
app.use(cors({
  origin: true,
  credentials: true
}))

// connect to database
connectDB()

// routing
app.post('/signup', usersController.signup)
app.post('/login', usersController.login)
app.get('/logout', usersController.logout)
app.get('/check-auth', requireAuth, usersController.checkAuth)

// start the server
app.listen(process.env.PORT)
