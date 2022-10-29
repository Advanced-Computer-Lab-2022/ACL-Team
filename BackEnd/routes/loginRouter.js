const express = require('express')
//const user = require('../models/TraineeSchema')


const {
    loginUser,
    signIn,
    createToken,
    validateToken
    
} = require('../controller/authController')

const router = express.Router()

router.get('/', signIn)
router.post('/', loginUser)
router.post('/createToken', createToken)

router.get('/validateToken', validateToken)


module.exports = router