const Instructor = require('../../models/InstructorSchema')
const Course = require('../../models/course/courseSchema')



const viewOfferedCourses = async (req, res) => {


    const _id = req.query
    console.log(_id._id)

    const courses = await Course.find({
        instructor_id: _id._id
    })
    if (!courses)
        return res.status(404).json({
            error: error.message
        })
    return res.status(200).json(courses)
}
const addCourse = async (req, res) => {
    const {
        title,
        price,
        category,
        subject,
        instructor_id,
        totalHours,
        summary
    } = req.body

    try {
        const course = await Course.addCourse(title, price, category, subject, instructor_id, totalHours, summary)
        res.status(200).json({
            course
        })
    } catch (error) {

        res.status(400).json({
            error: error.message
        })

    }
}







module.exports = {

    addCourse,
    viewOfferedCourses

}