const express = require('express')
const Instructor = require('../models/InstructorSchema')

const {
    changeBiography,
    changeEmail,
    getInstructorbyId,
} = require('../controller/Instructor/instructorController')
const {
    viewOfferedCourses,
    addCourse,
    addDiscount,
    applyDiscount,
    setCoursePreview,
    addCourseSection,
    addCourseSubtitle,

} = require('../controller/Instructor/instructorCourseController')
const {
    addQuiz,
    addQuestion,
    editQuestion,
    addAssignment,
    addVideo
} = require('../controller/Instructor/instructorSubtitleController')


const router = express.Router()


router.get('/getInstructor', getInstructorbyId)
router.get('/', () => {

})

router.post('/changeEmail', changeEmail)
router.post('/changeBiography', changeBiography)
router.get('/courseShow', viewOfferedCourses)
router.post('/addDiscount', addDiscount)
router.post('/applyDiscount', applyDiscount)
router.post('/setCoursePreview', setCoursePreview)


router.post('/addCourse', addCourse)
router.post('/addCourseSection', addCourseSection)
router.post('/addCourseSubtitle', addCourseSubtitle)
router.post('/addQuiz', addQuiz)
router.post('/addVideo', addVideo)
router.post('/addAssignment', addAssignment)
router.post('/addQuestion', addQuestion)
router.post('/editQuestion', editQuestion)

module.exports = router