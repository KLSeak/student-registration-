const uploadImg = (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({
          success: false,
          message: "Image is required!"
        })
      }
  
      res.status(200).json({
        success: true,
        message: "Image upload success",
        filename: req.file.path  
      })
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message
      })
    }
  }
  
  module.exports = uploadImg