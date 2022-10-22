const express = require('express')
const Instructor = require('../models/InstructorSchema')

const router = express.Router()

router.get('/', getAllInstructors)
router.post('/', CreateNewInstructor)
router.get('/:id' , getAInstructor)

module.exports = router
