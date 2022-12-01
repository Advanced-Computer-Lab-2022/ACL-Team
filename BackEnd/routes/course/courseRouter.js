const express = require('express')
const course = require('../../models/course/courseSchema')
const CourseStudyRouter = require("./courseStudyRouter")
const {
    getAllCourses,
    getCourseById,
    getCoursesBySubject,
    getCoursesByPrice,
    getCoursesByRating,
    getCoursesByPriceFromLowToHigh,
    getCoursesByPriceFromHighToLow,
    getCourseSections,
} = require('../../controller/course/courseController');

const {
    rateCourse
} = require('../../controller/trainee/traineeController');




const router = express.Router();


router.use("/courseStudy", CourseStudyRouter)



router.get('/', getCourseById)
router.get('/getAllCourses', getAllCourses)
router.get('/CourseSections', getCourseSections)

router.post('/getCourseBySubject', getCoursesBySubject)
router.post('/getCoursesByPrice', getCoursesByPrice)
router.post('/getCoursesByRating', getCoursesByRating)


router.post('/course/rateCourse', rateCourse)



module.exports = router