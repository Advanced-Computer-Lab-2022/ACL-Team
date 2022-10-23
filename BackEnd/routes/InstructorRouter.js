const express = require('express')
const Instructor = require('../models/InstructorSchema')

const {
    getAllInstructors,
    AddInstructor,
    getInstructor
} = require('../controller/instructorController')

const router = express.Router()

router.get('/', getAllInstructors)
router.post('/', AddInstructor)
router.get('/:id' , getInstructor)

module.exports = router
