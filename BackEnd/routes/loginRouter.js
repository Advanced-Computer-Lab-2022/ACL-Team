const express = require('express')
//const user = require('../models/TraineeSchema')


const {
    createToken,
    validateToken,
    loginUser

} = require('../controller/authController')

const router = express.Router()

router.post('/', loginUser)

router.post('/createToken', createToken)

router.get('/validateToken', validateToken)


module.exports = router