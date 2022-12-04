const express = require('express')
const course = require('../../models/course/courseSchema')
const CourseStudyRouter = require("./courseStudyRouter")
const {
    getAllCourses,
    getCourseById,
    getCoursesByCategory,
    getCoursesByPrice,
    getCoursesByRating,
    getCoursesByPriceFromLowToHigh,
    getCoursesByPriceFromHighToLow,
    getCourseSections,
    getCourseSubtitles,
    getQuestion,
    search
} = require('../../controller/course/courseController');

const {
    rateCourse
} = require('../../controller/trainee/traineeController');
const { getQuestionGrade } = require('../../controller/trainee/traineeCourseController');




const router = express.Router();


router.use("/courseStudy", CourseStudyRouter)



router.get('/', getCourseById)
router.get('/getAllCourses', getAllCourses)


router.post('/getCourseByCategory', getCoursesByCategory)
router.post('/getCoursesByPrice', getCoursesByPrice)
router.post('/getCoursesByRating', getCoursesByRating)
router.post('/search', search)

router.post('/course/rateCourse', rateCourse)



module.exports = router