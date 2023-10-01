// import dependencies
const bycrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/user')

async function signup (req, res) {
  try {
  // get data from request body
    const { document, password, name, surname, age, residency, phone } = req.body
    const avatar = req.file ? req.file.path : undefined

    // hash password
    const hashedPassword = bycrypt.hashSync(password, 8)

    // create a new user with data
    await User.create({
      document,
      password: hashedPassword,
      name,
      surname,
      age,
      residency,
      phone,
      avatar
    })

    // respond to server with new user
    res.sendStatus(200)
  } catch (error) {
    console.error('The user cannot be created')
    console.error(error)
    res.sendStatus(400)
  }
}

async function login (req, res) {
  try {
    // get data from request body
    const { document, password } = req.body

    // find user in database using document
    const user = await User.findOne({ document })

    // compare password with user password
    const passwordMatch = await bycrypt.compare(password, user.password)
    if (!passwordMatch) return res.sendStatus(401)

    // create jwt token
    const expire = Date.now() + 1000 * 60 * 60 * 24 * 365
    const token = jwt.sign({ sub: user.id, exp: expire }, process.env.SECRET)

    // set the cookie
    res.cookie('Authorization', token, { expires: new Date(expire), httpOnly: true, samesite: 'lax' })

    // send response to client
    res.sendStatus(200)
  } catch (error) {
    console.error('The user cannot log in')
    console.error(error)
    res.sendStatus(400)
  }
}

async function logout (req, res) {
  try {
    // clear the cookie
    res.clearCookie('Authorization')

    // send response to client
    res.sendStatus(200)
  } catch (error) {
    console.error('The user cannot log out')
    console.error(error)
    res.sendStatus(400)
  }
}

function checkAuth (req, res) {
  try {
    // send status to client
    res.sendStatus(200)
  } catch (error) {
    console.error('The user is not authenticated')
    console.error(error)
    res.sendStatus(400)
  }
}

module.exports = { signup, login, logout, checkAuth }
