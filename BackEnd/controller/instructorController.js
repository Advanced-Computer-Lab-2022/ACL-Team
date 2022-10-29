const Instructor = require('../models/InstructorSchema')

//get instructor
const getInstructorbyId = async(req, res) => {
    const _id = req.params

    const instructor = await Instructor.findById(_id)

    if (!instructor) {
        return res.status(404).json({ error: 'course not found' })
    }

    return res.status(200).json(instructor)
}
const viewAllTitles = async(req, res) => {

}
const getAllCourses = async(req, res) => {
}
const getAllInstructors = async(req, res) => {
}
const getInstructor = async(req, res) => {
}
const AddInstructor = async(req, res) => {
}
const createCourse = async(req, res) => {
}
const editBiography = async(req,res) => {
    const _id = req.params 
    const biography = req.body
    

    try{
        const newbio = await Instructor.editBiography(_id,biography)
        res.status(200).json(newbio)
    }
    catch(error){
        res.status(404).json({error: error.message})
    }

}
const editEmail = async(req,res) => {
    const _id = req.params
    const Email = req.body
    

    try{
        const email = await Instructor.editBiography(_id,Email)
        res.status(200).json(email)
    }
    catch(error){
        res.status(404).json({error: error.message})
    }

}



module.exports = {
    
    getAllInstructors,
    getAllCourses,
    AddInstructor,
    getInstructor,
    createCourse,
    editBiography,
    editEmail

}
