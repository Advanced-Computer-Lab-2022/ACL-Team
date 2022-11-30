const Instructor = require('../../models/InstructorSchema')
const Course = require('../../models/course/courseSchema')
const User = require('../../models/UserSchema')

//get instructor
const getInstructorbyId = async (req, res) => {
    const _id = req.params

    const instructor = await Instructor.findById(_id)

    if (!instructor) {
        return res.status(404).json({
            error: 'course not found'
        })
    }

    return res.status(200).json(instructor)
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

    changeBiography,
    changeEmail,

}