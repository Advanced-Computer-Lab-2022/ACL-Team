const express = require('express')
const Instructor = require('../models/InstructorSchema')

const {
    getAllInstructors,
    AddInstructor,
    getInstructor,
    editBiography,
    editEmail,
    addCourse
} = require('../controller/instructorController')


const router = express.Router()

router.post('/addCourse', addCourse)

router.get('/', getAllInstructors)
router.post('/', editEmail)
router.get('/:id' , getInstructor)

module.exports = router
