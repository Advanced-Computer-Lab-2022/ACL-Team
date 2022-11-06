const express = require('express')
const course = require('../models/course/courseSchema')

const {
    getCourse,
    getAllCourses,
    getCourseById,
    getCoursesBySubject,
    getCoursesByPrice,
    getCoursesByRating,
    getCoursesByPriceFromLowToHigh,
    getCoursesByPriceFromHighToLow,


} = require('../controller/course/courseController');




const router = express.Router();

router.get('/', getCoursesByPriceFromHighToLow)
router.get('/getCourses', getAllCourses)
router.post('/getCourseBySubject', getCoursesBySubject)
router.post('/getCoursesByPrice', getCoursesByPrice)
router.post('/getCoursesByRating', getCoursesByRating)



router.delete('/:id', (req, res) => {

    res.json({
        mssg: "delete a courses "
    })
})
//update a course
router.patch('/:id', (req, res) => {
    res.json({
        mssg: "update a courses "
    })
})





module.exports = router