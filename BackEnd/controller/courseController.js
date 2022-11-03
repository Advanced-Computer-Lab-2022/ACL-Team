const Course = require('../models/courseSchema')

const Fuse = require('fuse.js')



//get all courses available
const getAllCourses = async (req, res) => {
    const courses = await Course.find().sort({
        createdAt: -1
    })

    res.status(200).json(courses)
}




//get a course
const getCourse = async (req, res) => {
    const _id = req._id

    const course = await Course.findById(_id)

    if (!course) {
        return res.status(404).json({
            error: 'course not found'
        })
    }

    res.status(200).json(course)
}
const getCourseByInstructor = async (req, res) => {

    const courses = await Course.find().sort({
        createdAt: -1
    })
    const options = {
        includeScore: true,
        keys: ['name']
    }
    const fuse = new Fuse(courses, (options))
    const result = fuse.search(req.instructor._id)
    res.status(200).json(result)
}
const getCourseByTitle = async (req, res) => {
    const courses = await Course.find().sort({
        createdAt: -1
    })
    const options = {
        includeScore: true,
        keys: ['name']
    }
    const fuse = new Fuse(courses, options)
    const result = fuse.search(req.title)
    res.status(200).json(result)
}
const getCourseBySubject = async (req, res) => {
    const courses = await Course.find().sort({
        createdAt: -1
    })
    const options = {
        includeScore: true,
        keys: ['subject']
    }
    const fuse = new Fuse(courses, options)
    const result = fuse.search(req.subject)
    res.status(200).json(result)
}
const getCourseById = async (req, res) => {
    const id = req.id

    const course = await Course.findById(id);

    if (!course) {
        return res.status(404).json({
            error: 'course not found'
        })
    }

    res.status(200).json(course)
}
//get course title and total hours and ratings
const getAll = async (req, res) => {
    const courses = await Course.find({}, )
}

const getCoursesBySubject = async (req, res) => {
    const {
        subject
    } = req.body
    try {
        const courses = await Course.getCoursesBySubject(subject)
        res.status(200).json(courses)
    } catch (error) {
        res.status(400).json({
            error: error.message
        })
    }
}

const getCoursesByPrice = async (req, res) => {
    const {
        price
    } = req.body
    console.log(price)
    try {
        const courses = await Course.getCoursesByPrice(price)
        res.status(200).json(courses)
    } catch (error) {
        res.status(400).json({
            error: error.message
        })
    }
}

const getCoursesByPriceFromLowToHigh = async (req, res) => {
    try {
        const courses = await Course.getCoursesByPriceFromLowToHigh()
        res.status(200).json(courses)
    } catch (error) {
        res.status(400).json({
            error: error.message
        })
    }
}

const getCoursesByPriceFromHighToLow = async (req, res) => {
    try {
        const courses = await Course.getCoursesByPriceFromHighToLow()
        res.status(200).json(courses)
    } catch (error) {
        res.status(400).json({
            error: error.message
        })
    }
}

const getCoursesByRating = async (req, res) => {
    const {
        rating
    } = req.body
    try {
        const courses = await Course.getCoursesByRating(rating)
        res.status(200).json(courses)
    } catch (error) {
        res.status(400).json({
            error: error.message
        })
    }
}
const getCoursesByRatingFromLowToHigh = async (req, res) => {
    try {
        const courses = await Course.getCoursesByRatingFromLowToHigh()
        res.status(200).json(courses)
    } catch (error) {
        res.status(400).json({
            error: error.message
        })
    }
}
const getCoursesByRatingFromHighToLow = async (req, res) => {
    try {
        const courses = await Course.getCoursesByRatingFromHighToLow()
        res.status(200).json(courses)
    } catch (error) {
        res.status(400).json({
            error: error.message
        })
    }
}





















module.exports = {
    getCourse,
    getAllCourses,
    getCourseById,
    getCoursesBySubject,
    getCoursesByPriceFromLowToHigh,
    getCoursesByPriceFromHighToLow,
    getCoursesByRating,
    getCoursesByRatingFromLowToHigh,
    getCoursesByRatingFromHighToLow,
    getCoursesByPrice

}