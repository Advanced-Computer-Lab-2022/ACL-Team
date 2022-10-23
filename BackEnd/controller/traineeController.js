const TraineeDb = require('../models/TraineeSchema')

//get Admin
const getTrainee = async(req, res) => {
    const { id } = req.params

    const Trainee = await TraineeDb.findById(id)

    if (!Trainee) {
        return res.status(404).json({ error: 'course not found' })
    }

    res.status(200).json(Admin)
}

const AddTrainee = async(req,res) => {

    
}

const getAllTrainee = async(req, res) => {
    const courses = await TraineeDb.find({}).sort({ createdAt: -1 })

    res.status(200).json(courses)
}




module.exports = {
    
    getTrainee,
    getAllTrainee,
    AddTrainee,

}