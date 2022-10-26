const Course = require('../models/courseSchema')

//get all courses available
const getAllCourses = async(req, res) => {
    const courses = await Course.find({}).sort({ createdAt: -1 })

    res.status(200).json(courses)
}


//get a course
const getCourse = async(req, res) => {
    const { id } = req.id

    const course = await Course.findById(id)

    if (!course) {
        return res.status(404).json({ error: 'course not found' })
    }

    res.status(200).json(course)
}

const getCourseById = async(req, res) => {
    const id  = req.id

    const course = await Course.findById(id);

    if (!course) {
        return res.status(404).json({ error: 'course not found' })
    }

    res.status(200).json(course)
}

//create a course
const createCourse = async(req, res) => {
    const { id,title,category,instructor_id,summary,price } = req.body

    try {
        const course = await Course.create({ id,title,category,instructor_id,summary,price })
        res.status(200).json(course)
    } catch (error) {

        res.status(400).json({ error: error.message })

    }
}





















module.exports = {
    createCourse,
    getCourse,
    //getAllCourses,
    getCourseById
}