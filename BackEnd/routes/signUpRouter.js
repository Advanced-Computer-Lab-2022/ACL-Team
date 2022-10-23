const express = require('express')
//const user = require('../models/TraineeSchema')


const {
    signIn,

    signOut

} = require('../controller/signUpController')

const router = express.Router()

router.get('/', signIn)
router.post('/', signOut)


module.exports = router