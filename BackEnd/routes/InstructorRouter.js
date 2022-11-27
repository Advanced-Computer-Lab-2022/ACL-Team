const express = require('express')
const Instructor = require('../models/InstructorSchema')

const {
    AddInstructor,
    editBiography,
    editEmail,
} = require('../controller/Instructor/instructorController')
const {
    viewOfferedCourses,
    addCourse,
    defineDiscount,
    applyDiscount,
    setCoursePreview,
    addCourseSection
} = require('../controller/course/instructorCourseController')


const router = express.Router()

router.post('/addCourse', addCourse)

router.get('/', () => {

})
router.post('/addCourseSection', addCourseSection)
router.post('/', editEmail)
router.get('/courseShow', viewOfferedCourses)
router.post('/defineDiscount', defineDiscount)
router.post('/applyDiscount', applyDiscount)
router.post('/setCoursePreview', setCoursePreview)

module.exports = router