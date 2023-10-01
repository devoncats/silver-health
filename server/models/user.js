// import dependency
const mongoose = require('mongoose')

// create user schema
const userSchema = new mongoose.Schema({
  document: {
    type: String,
    required: true,
    unique: true,
    index: true
  },

  password: {
    type: String,
    required: true
  },

  name: {
    type: String,
    required: true
  },

  surname: {
    type: String,
    required: true
  },

  insured: {
    type: Boolean
  },

  age: Number,

  residency: String,

  phone: {
    type: String,
    max: 8
  },

  avatar: String
})

module.exports = mongoose.model('User', userSchema)
