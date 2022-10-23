const express = require('express')
const Trainee = require('../models/TraineeSchema')

const {
    getAllTrainee,
    AddTrainee,
    getTrainee

} = require('../controller/TraineeController')



const router = express.Router()

router.get('/', getAllTrainee)
router.post('/', AddTrainee)
router.get('/:id' , getTrainee)

module.exports = router