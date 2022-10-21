const courseDb = require('../models/courseSchema')

//get all courses available
const getAllCourses = async(req, res) => {
    const courses = await courseDb.find({}).sort({ createdAt: -1 })

    res.status(200).json(courses)
}


//get a course
const getCourse = async(req, res) => {
    const { id } = req.params

    const course = await courseDb.findById(id)

    if (!course) {
        return res.status(404).json({ error: 'course not found' })
    }

    res.status(200).json(course)
}

//create a course
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
    createCourse,
    getCourse,
    getAllCourses
}