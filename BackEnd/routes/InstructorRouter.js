const express = require('express')
const Instructor = require('../models/InstructorSchema')

const {
    AddInstructor,
    changeBiography,
    changeEmail,
} = require('../controller/Instructor/instructorController')
const {
    viewOfferedCourses,
    addCourse,
    addDiscount,
    applyDiscount,
    setCoursePreview,
    addCourseSection
} = require('../controller/course/instructorCourseController')
const { addQuiz, addQuizQuestion } = require('../controller/course/instructorSectionController')


const router = express.Router()



router.get('/', () => {

})
router.post('/addCourseSection', addCourseSection)
router.post('/changeEmail', changeEmail)
router.post('/changeBiography', changeBiography)
router.get('/courseShow', viewOfferedCourses)
router.post('/addDiscount', addDiscount)
router.post('/applyDiscount', applyDiscount)
router.post('/setCoursePreview', setCoursePreview)
router.post('/addCourse', addCourse)
router.post('/addQuiz', addQuiz)
router.post('/addQuizQuestion', addQuizQuestion)

module.exports = router