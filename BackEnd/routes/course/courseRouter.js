const express = require('express')
const course = require('../../models/course/courseSchema')
const CourseStudyRouter = require("./courseStudyRouter")
const {
    getCourse,
    getAllCourses,
    getCourseById,
    getCoursesBySubject,
    getCoursesByPrice,
    getCoursesByRating,
    getCoursesByPriceFromLowToHigh,
    getCoursesByPriceFromHighToLow,
} = require('../../controller/course/courseController');

const {
    rateCourse
} = require('../../controller/trainee/traineeController');




const router = express.Router();


router.use("/courseStudy", CourseStudyRouter)



router.get('/', getCoursesByPriceFromHighToLow)
router.get('/getCourses', getAllCourses)
router.post('/getCourseBySubject', getCoursesBySubject)
router.post('/getCoursesByPrice', getCoursesByPrice)
router.post('/getCoursesByRating', getCoursesByRating)
router.post('/course/rateCourse', rateCourse)



module.exports = router