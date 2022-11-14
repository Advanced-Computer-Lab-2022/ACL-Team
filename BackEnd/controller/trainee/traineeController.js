const Instructor = require('../../models/InstructorSchema')
const Course = require('../../models/course/courseSchema')
const Trainee = require('../../models/traineeSchema')


const rateCourse = async (req, res) => {
    const {
        course_id,
        rating
    } = req.body

    try {
        const course = await Course.rateCourse(course_id, rating)

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

    try {
        const review = await Trainee.reviewInstructor(_id, course_id, instructor_id, type, reviewString)

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
    rateCourse,
    reviewInstructor

}