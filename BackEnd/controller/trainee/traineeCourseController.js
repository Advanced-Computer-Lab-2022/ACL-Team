const Instructor = require('../../models/InstructorSchema')
const Course = require('../../models/course/courseSchema')
const Trainee = require('../../models/traineeSchema')
const CourseProgress = require('../../models/course/courseProgress/courseProgressSchema')
const CourseSectionProgress = require('../../models/course/courseProgress/courseSectionProgress')
const CourseMaterial = require('../../models/course/courseMaterialSchema')
const User = require('../../models/UserSchema')
const nodemailer = require("nodemailer");

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


const getQuestionGrade = async (req, res) => {
    const {
        user_id,
        course_id,
        section_id,
        material_id,
        question_id,
    } = req.body

    try {
        const grade = await CourseSectionProgress.getQuestionGrade(user_id,course_id,section_id,material_id,question_id)

        res.status(200).json({
            grade,
        })
    } catch (error) {
        res.status(400).json({
            error: error.message
        })
    }
}
const getQuizGrade = async (req, res) => {
    const {
        user_id,
        course_id,
        section_id,
        material_id,
    } = req.body

    try {
        const grade = await CourseSectionProgress.getQuizGrade(user_id,course_id,section_id,material_id)

        res.status(200).json({
            grade,
        })
    } catch (error) {
        res.status(400).json({
            error: error.message
        })
    }
}
const getJoinedCourses = async (req, res) => {
    const {
        _id,

    } = req.query

    try {
        const trainee = await Trainee.findOne({
            _id
        })
        var ownedCourses = trainee.ownedCourses


        res.status(200).json({
            ownedCourses,
        })

    } catch (error) {
        res.status(400).json({
            error: error.message
        })
    }
}
const getMaterial = async (req, res) => {
    const {
        material_id,
    } = req.query
    
    try {
        
        const material = await CourseMaterial.findOne({
            _id:material_id
        })

        res.status(200).json({
            material
        })
    } catch (error) {
        res.status(400).json({
            error: error.message
        })
    }
}

const getEmailandSendCertifiate = async (req , res) => {
    const {
        trainee_id
    } = req.body
    try {
        const user = await User.findOne({_id : trainee_id})
        
        if(!user)
            throw Error("No User Found")
            let testAccount = await nodemailer.createTestAccount();
            var transporter = nodemailer.createTransport({
                service: "gmail",
                auth: {
                  user:  "marwan.ashrafshaaban123@gmail.com",
                  pass: "ajawyergyiihuswq", 
                },
              });
          
              var mailOptions = {
                from: '"ACL " marwan.ashrafshaaban123@gmail.com',
                to: user.email,
                subject: "Certificate",
                text: "here is you certificate",
                attachments: [{
                    filename: 'file.pdf',
                    path:'Certificate.pdf',
                    contentType: 'application/pdf'
                  }]
              };
          
              transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                  console.log(error);
                } else {
                  console.log("Email sent: " + info.response);
                  res.status(200).json(user)
                }
                
              });
    } catch (error) {
        res.status(400).json({
            error: error.message
        })
    }
}






module.exports = {
    answerQuestion,
    getQuestionGrade,
    getQuizGrade,
    getJoinedCourses,
    getMaterial,
    getEmailandSendCertifiate
}