const express = require('express')
const Instructor = require('../models/InstructorSchema')

const {
    getAllInstructors,
    AddInstructor,
    getInstructor
} = require('../controller/instructorController')
const { addCourse } = require('../controller/courseController')

const router = express.Router()

router.post('/addCourse', addCourse)

router.get('/', getAllInstructors)
router.post('/', AddInstructor)
router.get('/:id' , getInstructor)

module.exports = router
