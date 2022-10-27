const Instructor = require('../models/InstructorSchema')

//get instructor
const getInstructorbyId = async(req, res) => {
    const _id = req.params

    const instructor = await Instructor.findById(_id)

    if (!instructor) {
        return res.status(404).json({ error: 'course not found' })
    }

    return res.status(200).json(instructor)
}
const viewAllTitles = async(req, res) => {

}
const getAllCourses = async(req, res) => {
}
const getAllInstructors = async(req, res) => {
}
const getInstructor = async(req, res) => {
}
const AddInstructor = async(req, res) => {
}
const createCourse = async(req, res) => {
}



module.exports = {
    
    getAllInstructors,
    getAllCourses,
    AddInstructor,
    getInstructor,
    createCourse

}
