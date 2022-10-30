const express = require('express')
const course = require('../models/courseSchema')

const {
    addCourse,
    getCourse,
    getAllCourses,
    getCourseById,
    getCoursesBySubject,
    getCoursesByPriceFromLowToHigh,
    getCoursesByPriceFromHighToLow

} = require('../controller/courseController');




const router = express.Router();

router.get('/', getCoursesByPriceFromHighToLow)

router.post('/', getCoursesBySubject)



router.delete('/:id', (req, res) => {

        res.json({ mssg: "delete a courses " })
    })
    //update a course
router.patch('/:id', (req, res) => {
    res.json({ mssg: "update a courses " })
})





module.exports = router