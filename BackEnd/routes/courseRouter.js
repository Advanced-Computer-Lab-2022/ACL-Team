const express = require('express')
const course = require('../models/courseSchema')
const {
    createCourse,

    getAllCourses

} = require('../controller/courseController')
const {
    getCourse,


} = require('../controller/courseSearchController')


const router = express.Router();

router.get('/', getAllCourses)

router.get('/:id', getCourse)
router.post('/:id', getCourse)

//post still is not working
router.post('/', createCourse)

router.delete('/:id', (req, res) => {
        res.json({ mssg: "delete a courses " })
    })
    //update a course
router.patch('/:id', (req, res) => {
    res.json({ mssg: "update a courses " })
})





module.exports = router