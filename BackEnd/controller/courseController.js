const Course = require('../models/courseSchema')

const Fuse = require('fuse.js')

const options = {
    includeScore: true,
    keys: ['name']
}

//get all courses available
const getAllCourses = async(req, res) => {
    const courses = await Course.find().sort({ createdAt: -1 })

    res.status(200).json(courses)
}




//get a course
const getCourse = async(req, res) => {
    const _id  = req._id

    const course = await Course.findById(_id)

    if (!course) {
        return res.status(404).json({ error: 'course not found' })
    }

    res.status(200).json(course)
}
const getCourseByInstructor = async(req, res) => {
    const courses = await Course.find().sort({ createdAt: -1 })
    const fuse = new Fuse(courses,options)
    const result = fuse.search(req.instructor._id)
    res.status(200).json(result)
}
const getCourseByTitle = async(req, res) => {
    const courses = await Course.find().sort({ createdAt: -1 })
    const fuse = new Fuse(courses,options)
    const result = fuse.search(req.title)
    res.status(200).json(result)
}
const getCourseBySubject = async(req, res) => {
    const courses = await Course.find().sort({ createdAt: -1 })
    const fuse = new Fuse(courses,options)
    const result = fuse.search(req.subject)
    res.status(200).json(result)
}
const getCourseById = async(req, res) => {
    const id  = req.id

    const course = await Course.findById(id);

    if (!course) {
        return res.status(404).json({ error: 'course not found' })
    }

    res.status(200).json(course)
}
//get course title and total hours and ratings
const getAll = async (req,res) => {
    const courses = await Course.find({} , )
}
//create a course
const createCourse = async(req, res) => {
    const {title , price , category , subject , instructor_id , totalHours , summary } = req.body

    try {
        const course = await Course.addCourse(title , price , category , subject , instructor_id , totalHours , summary)
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