const express = require('express')
const requireAuth = require('../middleware/requireAuth')
const upload = require('../middleware/upload')
const usersController = require('../controllers/usersController')

const router = express.Router()

router.post('/signup', upload.single('avatar'), usersController.signup)
router.post('/login', usersController.login)
router.get('/logout', usersController.logout)
router.get('/check-auth', requireAuth, usersController.checkAuth)

module.exports = router
