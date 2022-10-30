const express = require('express')
const course = require('../models/courseSchema')

const {
    addCourse,
    getCourse,
    getAllCourses,
    getCourseById,
    getCoursesBySubject,
    getCoursesByPrice

} = require('../controller/courseController');




const router = express.Router();

router.get('/', addCourse)
router.get('/getCourses', getAllCourses)
router.post('/getCourseBySubject', getCoursesBySubject)
router.post('/getCourseByPrice', getCoursesByPrice)



router.delete('/:id', (req, res) => {

        res.json({ mssg: "delete a courses " })
    })
    //update a course
router.patch('/:id', (req, res) => {
    res.json({ mssg: "update a courses " })
})





module.exports = router