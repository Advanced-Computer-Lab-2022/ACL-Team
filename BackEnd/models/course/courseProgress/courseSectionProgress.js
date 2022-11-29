const mongoose = require('mongoose')
const User = require('../../UserSchema')
const CourseMaterial = require('../courseMaterialSchema')
const CourseSection = require('../courseSectionSchema')
const Question = require('../questionSchema')


const Schema = mongoose.Schema

const CourseSectionProgressSchema = new Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    course_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course',
        required: true
    },
    section_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Section',
        required: true
    },
    username: {
        type: String,
    },
    sectionTitle: {
        type: String,
        required: true
    },
    solvedQuizzes: [{
        quiz_id: mongoose.Schema.Types.ObjectId,//CourseMaterial_id
        //subtitle_id:mongoose.Schema.Types.ObjectId, //CourseSubtitle_id
        questionsAnswers: [{
            question_id: mongoose.Schema.Types.ObjectId,
            choice: ['choice_1', 'choice_2', 'choice_3', 'choice_4'], //Enum 
        }],
        //finishedPercentage: Number,
        acquiredGrade: Number,
        //acquiredPoints: Number,//TODO
    }],
    solvedAssignments: [{
        assignment_id: mongoose.Schema.Types.ObjectId, //CourseMaterial_id
        subtitle_id:mongoose.Schema.Types.ObjectId, //CourseSubtitle_id
        questionsAnswers: [{
            question_id: mongoose.Schema.Types.ObjectId,
            choice: ['choice_1', 'choice_2', 'choice_3', 'choice_4'], //Enum 
        }],
        finishedPercentage: Number,
        acquiredGrade: Number,
        acquiredPoints: Number,//TODO
    }],
    watchedVideos: [{
        video_id: mongoose.Schema.Types.ObjectId, //CourseMaterial_id
        subtitle_id:mongoose.Schema.Types.ObjectId, //CourseSubtitle_id
        isWatched: Boolean,
        writtenNotes: String,
        acquiredPoints: Number,//TODO
    }],

    
}, {
    timestamps: true
})
CourseSectionProgressSchema.statics.documentExists = async function (user_id,course_id,section_id) {
    const sectionProgress = await this.findOne({
        user_id,
        course_id,
        section_id
    })

    if(!sectionProgress)
    {
        return false
    }
    else
    {
        return true
    }
}

CourseSectionProgressSchema.statics.answerQuestion = async function (user_id,course_id,section_id,material_id, question_id,choice) {

    const material = await CourseMaterial.findOne({
        _id:material_id
    })
    
    if (!material)
        throw Error('This Material Does not Exist')

    

    const user = await User.findOne({
        _id:user_id
    })
    
    if (!user)
        throw Error('This User Does not Exist')

    const section = await CourseSection.findOne({
        _id:section_id
    })
        
    if (!section)
        throw Error('This Section Does not Exist')

    const question = await Question.findOne({
        _id:question_id
    })
            
    if (!question)
        throw Error('This Question Does not Exist')

    const sectionProgress = await this.findOne({
        user_id,
        course_id,
        section_id,
    })

    if(!sectionProgress)
    {
        sectionProgress =  await this.create({
            user_id,
            course_id,
            section_id,
            username:user.username,
            sectionTitle : section.sectionTitle
        })
    }

    //TODO  HERE WE NEED TO CHECK IF HE OWN THE COURSE

    const questionAnswer = {
        question_id:question_id,
        choice:choice,
    }

    var grade = 0

    if(question.answer == choice)
        grade = question.maxGrade


    return await this.findOneAndUpdate({
        _id : sectionProgress._id
    }, {
        $push: {
            solvedQuizzes:{
                quiz_id: material_id,
                questionsAnswers:questionAnswer,
                acquiredGrade: grade,
            }
        },
    })

}

module.exports = mongoose.model('Section Progress', CourseSectionProgressSchema)