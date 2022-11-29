const express = require('express')
const {
    rateCourse,
    reviewInstructor,
    joinCourse
} = require('../controller/trainee/traineeController')
const User = require('../models/userSchema')

const router = express.Router()

router.post('/joinCourse', joinCourse)

router.post('/rateCourse', rateCourse)

router.post('/reviewInstructor', reviewInstructor)

module.exports = router