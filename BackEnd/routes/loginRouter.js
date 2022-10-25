const express = require('express')
//const user = require('../models/TraineeSchema')


const {
    loginUser,
    signIn,
    
} = require('../controller/authController')

const router = express.Router()

router.get('/', sign)
router.post('/', loginUser)


module.exports = router