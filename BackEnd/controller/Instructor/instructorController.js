const Instructor = require('../../models/InstructorSchema')
const Course = require('../../models/course/courseSchema')
const User = require('../../models/UserSchema')
const Reviews = require('../../models/lib/reviewSchema')
//get instructor
const getInstructorbyId = async (req, res) => {
    const _id = req.query

    const instructor = await Instructor.findById(_id)

    if (!instructor) {
        return res.status(404).json({
            error: 'course not found'
        })
    }

    return res.status(200).json(instructor)
}
const getCoursesByInstructor_id = async (req,res) => {
    const {instructor_id} = req.body

    try {
        const courses = await Course.find({instructor_id : instructor_id})
        res.status(200).json(courses)
    } catch (error) {
        error: error.message
    }
    
}

const changeBiography = async (req, res) => {
    const {
        _id,
        newBiography
    } = req.body
    try {
        const newbio = await Instructor.changeBiography(_id, newBiography)
        res.status(200).json(newbio)
    } catch (error) {
        res.status(404).json({
            error: error.message
        })
    }

}
const getReviewsByInstructorId =async(req,res) =>{
    const {
     reviewed_id
    } = req.body
    try {
        const reviews = await Reviews.find({reviewed_id})

        res.status(200).json(reviews)
    } catch (error) {
        res.status(404).json({
            error: error.message
        })
    }
}
const changeEmail = async (req, res) => {
    
    const {
        _id,
        email,
        newEmail,
    } = req.body
    console.log(req.body)

    try {
        const user = await User.changeEmail(_id,email,newEmail)
        res.status(200).json(user)
    } catch (error) {
        res.status(404).json({
            error: error.message
        })
    }

}



module.exports = {
    getReviewsByInstructorId,
    changeBiography,
    changeEmail,
    getInstructorbyId,
    getCoursesByInstructor_id,
}