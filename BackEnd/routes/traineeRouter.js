const express = require('express')
const {
    rateCourse,
    reviewInstructor
} = require('../controller/trainee/traineeController')
const User = require('../models/userSchema')

const router = express.Router()

router.post('/rateCourse', rateCourse)

router.post('/reviewInstructor', reviewInstructor)

module.exports = router