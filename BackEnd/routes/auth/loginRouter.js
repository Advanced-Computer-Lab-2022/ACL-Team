const express = require('express')
//const user = require('../models/TraineeSchema')


const {
    createToken,
    validateToken,
    loginUser,
    forgetPassword,
    resetPassword,
    resetPasswordPost

} = require('../../controller/authController')

const { changePassword } = require('../../controller/userController')

const router = express.Router()

router.post('/', loginUser)

router.post('/createToken', createToken)
router.post('/forgetPassword', forgetPassword)
router.get('/resetPassword/:id/:token' , resetPassword)
router.post('/resetPassword/:id/:token' , resetPasswordPost)
router.get('/validateToken', validateToken)

router.post('/changePassword', changePassword)

module.exports = router