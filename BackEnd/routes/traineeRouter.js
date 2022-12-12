const express = require('express')
const { requestCourse } = require('../controller/trainee/corporateController')
const {
    rateCourse,
    reviewInstructor,
    joinCourse
} = require('../controller/trainee/traineeController')
const {
    answerQuestion,
    getQuestionGrade,
    getQuizGrade,
    getJoinedCourses
} = require('../controller/trainee/traineeCourseController')
const User = require('../models/userSchema')

const router = express.Router()

router.post('/joinCourse', joinCourse)

router.post('/rateCourse', rateCourse)

router.post('/reviewInstructor', reviewInstructor)

router.post('/answerQuestion', answerQuestion)

router.get('/questionGrade', getQuestionGrade)

router.get('/quizGrade', getQuizGrade)

router.get('/myCourses', getJoinedCourses)


//ALL ROUTES BELOW HERE ARE FOR CORPORATE TRAINEE ONLY

router.post('/requestCourse', requestCourse)


module.exports = router