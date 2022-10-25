const express = require('express')
//const user = require('../models/TraineeSchema')


const {
    signupUser,

    signOut,

    signupInstructor

} = require('../controller/authController')

const router = express.Router()

router.get('/', signOut)
router.post('/', signupUser)



module.exports = router