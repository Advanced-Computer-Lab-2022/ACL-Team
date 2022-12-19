const express = require('express')
const { 
    getCourseById,
    getCourseSections,
    getCourseSubtitles,
    getQuestion, 
    getSectionProgress
} = require('../controller/course/courseController')
const { getMaterial } = require('../controller/trainee/traineeCourseController')
const { getIssue } = require('../controller/userController')

const router = express.Router()


router.get('/Course', getCourseById)
router.get('/CourseSections', getCourseSections)
router.get('/CourseSubtitles', getCourseSubtitles)
router.get('/CourseMaterial', getMaterial)
router.get('/Question', getQuestion)
router.get('/Issue', getIssue)

router.get('/CourseSectionProgress', getSectionProgress)


module.exports = router