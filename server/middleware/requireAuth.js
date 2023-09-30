const jwt = require('jsonwebtoken')
const User = require('../models/user')

async function requireAuth (req, res, next) {
  try {
    // read token from cookies
    const token = req.cookies.Authorization

    // verify token
    const decoded = jwt.verify(token, process.env.SECRET)

    // check if token is not expired
    if (decoded.exp < Date.now()) return res.sendStatus(401)

    // find user in database using id from token
    const user = await User.findById(decoded.sub)
    if (!user) return res.sendStatus(401)

    // set user in request
    req.user = user

    // continue with next middleware or route handler
    next()
  } catch (error) {
    console.error('The user cannot be authenticated')
    console.error(error)
    res.sendStatus(401)
  }
}

module.exports = requireAuth
