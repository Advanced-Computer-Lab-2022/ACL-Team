const express = require('express')
const Trainee = require('../models/TraineeSchema')

const router = express.Router()

router.get('/', getAllUsers)
router.post('/', CreateNewUser)
router.get('/:id' , getAUser)

module.exports = router