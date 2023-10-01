const path = require('path')
const multer = require('multer')

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, 'uploads/avatar')
  },

  filename: function (req, file, callback) {
    const ext = path.extname(file.originalname)
    callback(null, `${Date.now()}${ext}`)
  }
})

const upload = multer({
  storage,

  fileFilter: function (req, file, callback) {
    file.mimetype === 'image/png' || file.mimetype === 'image/jpg' ? callback(null, true) : callback(null, false)
  },
  limits: {
    fileSize: 1024 * 1024 * 2
  }
})

module.exports = upload
