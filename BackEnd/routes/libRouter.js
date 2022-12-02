const express = require('express')
const { getCourseById, getCourseSections, getCourseSubtitles, getQuestion } = require('../controller/course/courseController')
const { getMaterial } = require('../controller/trainee/traineeCourseController')

const router = express.Router()


router.get('/CourseMaterial', getMaterial)

router.get('/course', getCourseById)

router.get('/CourseSections', getCourseSections)
router.get('/CourseSubtitles', getCourseSubtitles)
router.get('/Question', getQuestion)

module.exports = router