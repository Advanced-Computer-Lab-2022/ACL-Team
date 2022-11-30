const express = require('express')
const Instructor = require('../models/InstructorSchema')

const {
    changeBiography,
    changeEmail,
} = require('../controller/Instructor/instructorController')
const {
    viewOfferedCourses,
    addCourse,
    addDiscount,
    applyDiscount,
    setCoursePreview,
    addCourseSection,
    addVideo
} = require('../controller/Instructor/instructorCourseController')
const {
    addQuiz,
    addQuizQuestion,
    editQuestion
} = require('../controller/Instructor/instructorSectionController')


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
router.post('/addVideo', addVideo)
router.post('/addQuizQuestion', addQuizQuestion)
router.post('/editQuestion', editQuestion)

module.exports = router