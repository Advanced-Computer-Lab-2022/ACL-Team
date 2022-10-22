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
    const {}

}