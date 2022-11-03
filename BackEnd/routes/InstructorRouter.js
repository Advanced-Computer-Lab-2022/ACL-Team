const express = require('express')
const Instructor = require('../models/InstructorSchema')

const {
    AddInstructor,
    editBiography,
    editEmail,
} = require('../controller/Instructor/instructorController')
const {
    viewOfferedCourses,
    addCourse
} = require('../controller/Instructor/instructorCourseController')


const router = express.Router()

router.post('/addCourse', addCourse)

router.get('/', () => {

})
router.post('/', editEmail)
router.get('/courseShow', viewOfferedCourses)

module.exports = router