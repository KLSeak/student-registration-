const express = require('express');
const app = express();
const path = require('path')
const dbConnection = require('./config/db')
require('dotenv').config()
const studentRouter = require('./routes/students.route')
const uploadRouter = require('./routes/upload.route')
const authRouter = require('./routes/auth.route')
const cors = require('cors')

// middleware
app.use(express.json())
app.use(cors({
    origin: [
      'https://student-regis-frontend.leangseakkong.workers.dev',
      'http://localhost:5173'  // keep for local dev
    ],
    methods: ['GET', 'POST', 'PATCH', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
  }))
// routes first ✅
app.use('/api/auth', authRouter)
app.use('/api/student', studentRouter)
app.use('/api/upload', uploadRouter)

// static files AFTER routes ✅
app.use('/upload', express.static(path.join(__dirname, 'upload')))

app.get('/', (req, res) => {
    res.send('home page!')
})

const port = process.env.PORT
dbConnection()

app.listen(port, () => {
    console.log("server is running")
    console.log(`http://localhost:${port}`)
})