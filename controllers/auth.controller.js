const Admin = require('../models/admin.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

// REGISTER
const register = async (req, res) => {
    try {
        const { username, email, password } = req.body

        // Check if admin already exists
        const existing = await Admin.findOne({ email })
        if (existing) {
            return res.status(400).json({ 
                success: false, 
                message: 'Admin already exists!' })
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10)

        const admin = await Admin.create({
            username,
            email,
            password: hashedPassword
        })

        res.status(201).json({ 
            success: true, 
            message: 'Admin registered successfully!' })
    } catch (error) {
        res.status(500).json({ 
            success: false, 
            message: error.message })
    }
}

// LOGIN
const login = async (req, res) => {
    try {
        const { email, password } = req.body

        // Find admin
        const admin = await Admin.findOne({ email })
        if (!admin) {
            return res.status(404).json({ 
                success: false, 
                message: 'Admin not found!' })
        }

        // Check password
        const isMatch = await bcrypt.compare(password, admin.password)
        if (!isMatch) {
            return res.status(401).json({ 
                success: false, 
                message: 'Invalid password!' })
        }

        // Generate JWT token
        const token = jwt.sign(
            { id: admin._id, email: admin.email },
            process.env.JWT_SECRET,
            { expiresIn: '1d' }
        )

        res.status(200).json({
            success: true,
            message: 'Login successful!',
            token,
            admin: { id: admin._id, username: admin.username, email: admin.email }
        })
    } catch (error) {
        res.status(500).json({ 
            success: false, 
            message: error.message })
    }
}

// LOGOUT
const logout = (req, res) => {
    // With JWT, logout is handled on the frontend by removing the token
    res.status(200).json({ 
        success: true, 
        message: 'Logged out successfully!' })
}

module.exports = { register, login, logout }