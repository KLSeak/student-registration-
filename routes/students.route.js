const express = require('express')
const {createStudent, AllStudents, oneStudents, updateStudents,deleteStudents}
 = require('../controllers/students.controller')
const verifyToken = require('../middleware/auth.middleware')
const studentRouter = express.Router()

studentRouter.use(verifyToken)

studentRouter.route('/')
    .post(createStudent)
    .get(AllStudents)

studentRouter.route('/:id')
    .get(oneStudents)
    .patch(updateStudents)
    .delete(deleteStudents)
    


module.exports = studentRouter