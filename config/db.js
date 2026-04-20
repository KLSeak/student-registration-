const mongoose = require('mongoose');
require('dotenv').config();
const uri = process.env.URI

const dbConnection = () =>{
    try {
        mongoose.connect(uri)
        .then(() => console.log('MongoDB Connected!'));
    } catch (error) {
        console.log(`dbConnectin Error, ${err.message}`)
    }
}
module.exports = dbConnection;