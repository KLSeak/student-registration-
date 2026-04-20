const mongoose = require('mongoose')
const studentSchema = new mongoose.Schema({

    fullName: {
        type: String,
        required: true
    },

    dob: {
        type: String,
        required: true
    },

    gender:{
        type: String,
        required: true
    },

    email: {
        type: String
    },

    phoneNumber: {
        type: String,
        required: true
    },

    address: {
        type: String
    },

    grade: {
        type: String,
        required: true
    },
    image: { 
        type: String, 
        default: '' }
}, {timestamps: true})
const Students = mongoose.model('Students', studentSchema)
module.exports = Students

