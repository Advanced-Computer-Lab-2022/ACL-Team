const AdminDB = require('../models/AdminSchema')

//get Admin
const getAdmin = async(req, res) => {
    const { id } = req.params

    const Admin = await AdminDB.findById(id)

    if (!Admin) {
        return res.status(404).json({ error: 'course not found' })
    }

    res.status(200).json(Admin)
}

const AddAUser = async(req,res) => {

    
}
const getAllCourses = async(req, res) => {
    const courses = await instructorDb.find({}).sort({ createdAt: -1 })

    res.status(200).json(courses)
}
const CreateNewUser = async(req, res) => {
    const {  id, username, password } = req.body

    try {
        const user = await userDb.create({ title, id, subject, rating, price })
        res.status(200).json(course)
    } catch (error) {

        res.status(400).json({ error: error.message })

    }
}
const getAllUsers = async(req, res) => {
    const user = await userDb.find({}).sort({ createdAt: -1 })

    res.status(200).json(courses)
}


// add admin
//add user
// add instructor +++++ search bta3hom
// add course
// edit user fields 




module.exports = {
    AddAUser,
    getAdmin,
    getAllCourses,
    CreateNewUser,
    getAllUsers
}
