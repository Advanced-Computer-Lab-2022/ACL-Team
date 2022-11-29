const express = require('express')
//const user = require('../models/TraineeSchema')


const {
    createToken,
    validateToken,
    loginUser

} = require('../../controller/authController')

const { changePassword } = require('../../controller/userController')

const router = express.Router()

router.post('/', loginUser)

router.post('/createToken', createToken)

router.get('/validateToken', validateToken)

router.post('/changePassword', changePassword)

module.exports = router