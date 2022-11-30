const Instructor = require('../../models/InstructorSchema')
const Course = require('../../models/course/courseSchema')
const Trainee = require('../../models/traineeSchema')

const joinCourse = async (req, res) => {
    const {
        _id,
        course_id,
    } = req.body

    try {
        const trainee = await Trainee.joinCourse(_id,course_id)

        res.status(200).json({
            trainee,
        })
    } catch (error) {
        res.status(400).json({
            error: error.message
        })
    }
}
const rateCourse = async (req, res) => {
    const {
        user_id,
        course_id,
        rating
    } = req.body

    try {
        const course = await Course.rateCourse(user_id,course_id, rating)

        res.status(200).json({
            course,
        })
    } catch (error) {
        res.status(400).json({
            error: error.message
        })
    }
}

const reviewInstructor = async (req, res) => {
    const {
        _id,
        course_id,
        instructor_id,
        type,
        reviewString
    } = req.body
    console.log(req.body)
    try {
        const review = await Trainee.reviewInstructor(_id,instructor_id, type, reviewString)

        res.status(200).json({
            review,
        })
    } catch (error) {
        res.status(400).json({
            error: error.message
        })
    }
}

module.exports = {
    joinCourse,
    rateCourse,
    reviewInstructor

}