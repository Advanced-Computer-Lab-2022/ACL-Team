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

module.exports = {
    rateCourse,


}