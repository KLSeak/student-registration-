const express = require('express')
const uploadImg = require('../controllers/upload.controller')
const upload = require('../middleware/upload.middleware')
const removefile = require('../controllers/remove.controller')

const uploadRouter = express.Router()

uploadRouter.route('/')
    .post(upload.single('file'), uploadImg)
    .delete(removefile)

module.exports = uploadRouter 