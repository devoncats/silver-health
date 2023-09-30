// laod environment variables
require('dotenv').config()

// import dependencies
const mongoose = require('mongoose')

// connect to database
async function connectDB () {
  try {
    await mongoose.connect(process.env.DB)
    console.log('Conected successfully to database')
  } catch (error) {
    console.error('Failed to connect to database')
    console.error(error)
  }
}

module.exports = connectDB
