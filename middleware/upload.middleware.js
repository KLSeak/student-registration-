const multer = require('multer')
const path = require('path')
const fs = require('fs')
const dayjs = require('dayjs')
const {time} = require('console')
const cloudinary = require('cloudinary').v2
const { CloudinaryStorage } = require('multer-storage-cloudinary')

const uploadPath = path.join(__dirname, '../upload')

if(!fs.existsSync('upload')){
    fs.mkdirSync('upload')
}

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
  })

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'student-register',  // folder name in Cloudinary
    allowed_formats: ['jpg', 'jpeg', 'png', 'webp'],
  }
})

const upload = multer({storage})
module.exports = upload
