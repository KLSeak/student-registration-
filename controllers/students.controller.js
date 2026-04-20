const Students = require('../models/students.model')

const createStudent = async (req, res) => {
    const data = req.body
    const newStudent = await new Students(data).save()
    try {
        res.status(201).json({
            success: true,
            data: newStudent,
            message: "Student add successfully!"
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

const AllStudents = async (req, res) => {
    const getAll = await Students.find()
    try {
        res.status(200).json({
            success: true,
            data: getAll,
            message: "All students are found!"
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

const oneStudents = async (req, res) => {
    const { id } = req.params
    const getOne = await Students.findById(id)
    try {
        res.status(200).json({
            success: true,
            data: getOne,
            message: `Student id ${id} have found!`
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

const updateStudents = async (req, res) => {
    const { id } = req.params

    try {
        const update = await Students.findByIdAndUpdate(id, req.body, {
            new: true,
            runValidators: true
        })
        if(!update){
            res.status(404).json({
                success: false,
                message: error.message
            })
        }
        res.status(200).json({
            success: true,
            data: update,
            message: `Students id ${id} update successfully`
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

const deleteStudents = async (req,res) =>{
    const {id} = req.params;
    const remove = await Students.findByIdAndDelete(id)
    try {
        res.status(200).json({
            success: true,
            data: remove,
            message: `Student id ${id} delete successfully!`
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

module.exports = { createStudent, AllStudents, oneStudents, updateStudents,
                deleteStudents }
