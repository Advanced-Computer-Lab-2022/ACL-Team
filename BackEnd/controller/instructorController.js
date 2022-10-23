const instructorDb = require('../models/InstructorSchema')

//get Admin
const getInstructor = async(req, res) => {
    const { id } = req.params

    const Instructor = await instructorDb.findById(id)

    if (!Instructor) {
        return res.status(404).json({ error: 'course not found' })
    }

    res.status(200).json(Admin)
}

const AddInstructor = async(req,res) => {

    
}
const getAllCourses = async(req, res) => {
    const courses = await instructorDb.find({}).sort({ createdAt: -1 })

    res.status(200).json(courses)
}
const getAllInstructors = async(req, res) => {
    const Instructor = await instructorDb.find({}).sort({ createdAt: -1 })

    res.status(200).json(courses)
}
const createCourse = async(req, res) => {
    const { title, id, subject, rating, price } = req.body

    try {
        const course = await courseDb.create({ title, id, subject, rating, price })
        res.status(200).json(course)
    } catch (error) {

        res.status(400).json({ error: error.message })

    }
}



module.exports = {
    
    getAllInstructors,
    getAllCourses,
    AddInstructor,
    getInstructor,
    createCourse

}
