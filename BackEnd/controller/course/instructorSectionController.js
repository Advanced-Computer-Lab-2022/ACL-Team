const Instructor = require('../../models/InstructorSchema')
const Course = require('../../models/course/courseSchema')
const Discount = require('../../models/lib/payment/discountSchema')
const CourseSection = require('../../models/course/courseSectionSchema')
const courseSubtitle = require('../../models/course/courseSubtitleSchema')
const CourseMaterial = require('../../models/course/courseMaterialSchema')




const addQuiz = async (req, res) => {
    const {
        course_id,
        section_id,
        subtitle_id, 
        quizName
    } = req.body

    try {
        
        const quiz = await courseSubtitle.addQuiz(course_id, section_id, subtitle_id, quizName)
        res.status(200).json({
            quiz
        })
    } catch (error) {

        res.status(400).json({
            error: error.message
        })

    }
}
const addQuizQuestion = async (req, res) => {
    const {
        course_id,
        section_id,
        subtitle_id,
        material_id,
        question_name,
        question,
        choice_1,
        choice_2,
        choice_3,
        choice_4,
        answer
    } = req.body

    try {
        
        const quiz = await courseSubtitle.addQuizQuestion(course_id, section_id, subtitle_id, material_id, question_name, question, choice_1, choice_2, choice_3, choice_4,answer)
        res.status(200).json({
            quiz
        })
    } catch (error) {

        res.status(400).json({
            error: error.message
        })

    }
}
const editQuestion = async (req, res) => {
    const {
        material_id,
        question_id,
        newQuestionName,
        newQuestion,
        choice_1,
        choice_2,
        choice_3,
        choice_4,
        answer
    } = req.body

    try {
        
        const question = await CourseMaterial.editQuestion(material_id, question_id, newQuestionName, newQuestion,choice_1, choice_2, choice_3, choice_4,answer)
        res.status(200).json({
            question
        })
    } catch (error) {

        res.status(400).json({
            error: error.message
        })

    }
}


module.exports = {
    addQuiz,
    addQuizQuestion,

    editQuestion

}