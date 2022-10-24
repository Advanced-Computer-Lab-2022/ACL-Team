const express = require('express')
//const user = require('../models/TraineeSchema')


const {
    signupUser,

    signOut

} = require('../controller/authController')

const router = express.Router()

router.get('/', signOut)
router.post('/', signupUser)


module.exports = router