const express = require('express')
const course = require('../models/courseSchema')

const {
    createCourse,
    getCourse,
    getAllCourses,
    getCourseById

} = require('../controller/courseController');



const router = express.Router();

// router.get('/', createCourse)

router.post('/', createCourse)
router.get('/getCourses', getAllCourses) 



router.delete('/:id', (req, res) => {

        res.json({ mssg: "delete a courses " })
    })
    //update a course
router.patch('/:id', (req, res) => {
    res.json({ mssg: "update a courses " })
})





module.exports = router