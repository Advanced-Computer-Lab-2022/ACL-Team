const express = require('express')
const {
    signUp
} = require('../controller/trainee/traineeController')
const User = require('../models/userSchema')

const router = express.Router()

router.get('/', getAllUsers)
router.post('/', signUp)
router.get('/:id', getAUser)

module.exports = router