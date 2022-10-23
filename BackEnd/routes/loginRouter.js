const express = require('express')
//const user = require('../models/TraineeSchema')


const {
    logIn,

    logOut

} = require('../controller/loginController')

const router = express.Router()

router.get('/', logIn)
router.post('/', logOut)


module.exports = router