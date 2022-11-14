const Instructor = require('../../models/InstructorSchema')
const Course = require('../../models/course/courseSchema')
const Discount = require('../../models/lib/payment/discountSchema')



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
const defineDiscount = async (req, res) => {
    const {
        _id,
        name,
        percentage,
        start_date,
        end_date
    } = req.body

    try {
        const discount = await Instructor.defineDiscount(_id, name, percentage, start_date, end_date)
        res.status(200).json({
            discount
        })
    } catch (error) {

        res.status(400).json({
            error: error.message
        })

    }

}
const applyDiscount = async (req, res) => {
    const {
        _id,
        course_id,
        discountName,
    } = req.body

    try {

        const discount = await Discount.findOne({
            name: discountName
        })
        if (!discount)
            throw Error('Discount does not exist please type the name correctly')

        const course = await Course.applyDiscount(course_id, discount._id)

        res.status(200).json({
            discount,
            course
        })
    } catch (error) {

        res.status(400).json({
            error: error.message
        })

    }
}
const setCoursePreview = async (req, res) => {
    const {
        _id,
        course_id,
        previewUrl,
    } = req.body

    try {
        const course = await Course.setCoursePreview(course_id, previewUrl)

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
    viewOfferedCourses,
    defineDiscount,
    applyDiscount,
    setCoursePreview

}