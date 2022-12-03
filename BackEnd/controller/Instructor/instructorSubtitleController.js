

const courseSubtitle = require('../../models/course/courseSubtitleSchema')
const CourseMaterial = require('../../models/course/courseMaterialSchema')




const addQuiz = async (req, res) => {
    const {
        course_id,
        section_id,
        subtitle_id, 
        quizName,
        duration,
        points
    } = req.body

    try {
        
        const quiz = await courseSubtitle.addQuiz(course_id, section_id, subtitle_id, quizName,duration,points)
        res.status(200).json({
            quiz
        })
    } catch (error) {

        res.status(400).json({
            error: error.message
        })

    }
}
const addAssignment = async (req, res) => {
    const {
        course_id,
        section_id,
        subtitle_id, 
        assignmentName,
        duration,
        points
    } = req.body

    try {
        
        const assignment = await courseSubtitle.addAssignment(course_id, section_id, subtitle_id, assignmentName,duration,points)
        res.status(200).json({
            assignment
        })
    } catch (error) {

        res.status(400).json({
            error: error.message
        })

    }
}
const addVideo = async (req, res) => {

    const {
        course_id,
        section_id,
        subtitle_id,
        videoName,
        videoUrl,
        videoDescription,
        duration,
        points,
    } = req.body

    try {
        const video = await courseSubtitle.addVideo(course_id, section_id, subtitle_id, videoName, videoUrl, videoDescription,duration,points)
        res.status(200).json({
            video
        })
    } catch (error) {

        res.status(400).json({
            error: error.message
        })

    }

}

const addQuestion = async (req, res) => {
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
        answer,
        grade
    } = req.body
    try {
        
        const quiz = await courseSubtitle.addQuestion(course_id, section_id, subtitle_id, material_id, question_name, question, choice_1, choice_2, choice_3, choice_4,answer,grade)
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
        answer,
        grade
    } = req.body

    try {
        
        const question = await CourseMaterial.editQuestion(material_id, question_id, newQuestionName, newQuestion,choice_1, choice_2, choice_3, choice_4,answer,grade)
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
    addAssignment,
    addVideo,

    addQuestion,
    editQuestion,
}