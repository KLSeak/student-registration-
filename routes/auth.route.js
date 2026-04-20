const express = require('express')
const { register, login, logout } = require('../controllers/auth.controller')
const verifyToken = require('../middleware/auth.middleware')

const authRouter = express.Router()

authRouter.post('/register', register)
authRouter.post('/login', login)
authRouter.post('/logout', verifyToken, logout)

module.exports = authRouter