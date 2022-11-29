const Instructor = require('../../models/InstructorSchema')
const Course = require('../../models/course/courseSchema')
const Trainee = require('../../models/traineeSchema')
const CourseProgress = require('../../models/course/courseProgress/courseProgressSchema')
const CourseSectionProgress = require('../../models/course/courseProgress/courseSectionProgress')

const answerQuestion = async (req, res) => {
    const {
        user_id,
        course_id,
        section_id,
        material_id,
        question_id,
        choice
    } = req.body

    try {
        const traineeCourseProgress = await CourseSectionProgress.answerQuestion(user_id,course_id,section_id,material_id, question_id,choice)

        res.status(200).json({
            traineeCourseProgress,
        })
    } catch (error) {
        res.status(400).json({
            error: error.message
        })
    }
}






module.exports = {
    answerQuestion

}