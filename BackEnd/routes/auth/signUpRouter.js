const express = require('express')
//const user = require('../models/TraineeSchema')
//LAW HAD LEMES EL CLASS DAH HATL3 MAYTEENO
const {
    signupTrainee,
    signupAdmin,
    signupInstructor

} = require('../../controller/authController')

const router = express.Router()

router.post('/', signupTrainee)
router.post('/admin', signupAdmin)
router.post('/instructor', signupInstructor)



module.exports = router