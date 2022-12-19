const mongoose = require('mongoose')
const User = require('../../UserSchema')
const CourseMaterial = require('../courseMaterialSchema')
const Course = require('../courseSchema')
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
    courseTitle: {
        type: String,
        ref: 'Course',
        //required: true
    },
    sectionTitle: {
        type: String,
        required: true
    },
    totalHours: {
        type: Number,
        default : 0,
    },
    finishedPercentage: {
        type: Number,
        default : 0,
    },
    materialNumber: {
        type: Number,
        default : 0,
    },
    totalPoints: {
        type: Number,
        default : 0,
    },
    finishedQuizzes: [{
        quiz_id: mongoose.Schema.Types.ObjectId,
    }],
    solvedQuizzes: [{
        quiz_id: mongoose.Schema.Types.ObjectId,//CourseMaterial_id
        //subtitle_id:mongoose.Schema.Types.ObjectId, //CourseSubtitle_id
        questionsAnswers: [{
            question_id: mongoose.Schema.Types.ObjectId,
            choice: ['choice_1', 'choice_2', 'choice_3', 'choice_4'],
            acquiredGrade: Number, 
        }],
        //finishedPercentage: Number,
        
        //acquiredPoints: Number,//TODO
    }],
    solvedAssignments: [{
        assignment_id: mongoose.Schema.Types.ObjectId, //CourseMaterial_id
        subtitle_id:mongoose.Schema.Types.ObjectId, //CourseSubtitle_id
        questionsAnswers: [{
            question_id: mongoose.Schema.Types.ObjectId,
            choice: ['choice_1', 'choice_2', 'choice_3', 'choice_4'],
            acquiredGrade: Number, //Enum 
        }],
        // finishedPercentage: Number,
        // acquiredPoints: Number,//TODO
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
    
    if (!user_id || !course_id || !section_id || !material_id|| !question_id|| !choice)
        throw error('All fields must be filled')

    var material = await CourseMaterial.findOne({
        _id:material_id
    })
    if (!material)
        throw Error('This Material Does not Exist')

    var user = await User.findOne({
        _id:user_id
    })
    if (!user)
        throw Error('This User Does not Exist')

    var course = await Course.findOne({
        _id:course_id
    })
    if (!course)
        throw Error('This Course Does not Exist')
 
    var section = await CourseSection.findOne({
        _id:section_id
    }) 
    if (!section)
        throw Error('This Section Does not Exist')

    var question = await Question.findOne({
        _id:question_id
    })  
    if (!question)
        throw Error('This Question Does not Exist')

    var sectionProgress = await this.findOne({
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
            sectionTitle : section.sectionTitle,
            courseTitle : course.title,
        })
    }

    //TODO  HERE WE NEED TO CHECK IF HE OWN THE COURSE



    //Check if student already solved the question
    for (let i = 0; i < sectionProgress.solvedQuizzes.length; i++) {
        if(sectionProgress.solvedQuizzes[i].quiz_id == material_id)
           if(sectionProgress.solvedQuizzes[i].questionsAnswers[0].question_id == question_id)
            throw Error('You Already Answered This Question')
      }

    var grade = 0
    if(question.answer == choice)
        grade = question.maxGrade

    var questionAnswer = {
            question_id:question_id,
            choice:choice,
            acquiredGrade: grade,
        }

    return await this.findOneAndUpdate({
        _id : sectionProgress._id
    }, {
        $push: {
            solvedQuizzes:{
                quiz_id: material_id,
                questionsAnswers:questionAnswer,
                
            }
        },
    })
}
CourseSectionProgressSchema.statics.getQuestionGrade = async function (user_id,course_id,section_id,material_id,question_id) {
   if (!user_id || !course_id || !section_id || !material_id|| !question_id)
        throw error('All fields must be filled')

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
    var returnedGrade = -100000

    for (let i = 0; i < sectionProgress.solvedQuizzes.length; i++) {
        
        if(sectionProgress.solvedQuizzes[i].quiz_id == material_id)
        {
           
           if(sectionProgress.solvedQuizzes[i].questionsAnswers[0].question_id == question_id)
           {
            returnedGrade = sectionProgress.solvedQuizzes[i].questionsAnswers[0].acquiredGrade
           }
        }
            
      }
    if(returnedGrade == -100000)
      throw Error('Question is Not Answered')

    return returnedGrade
}
CourseSectionProgressSchema.statics.getQuizGrade = async function (user_id,course_id,section_id,material_id) {
    if (!user_id || !course_id || !section_id || !material_id)
         throw error('All fields must be filled')
 
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

    const course = await Course.findOne({
        _id:course_id
    }) 
    if (!course)
        throw Error('This Course Does not Exist')
 
    const sectionProgress = await this.findOne({
        user_id,
        course_id,
        section_id,
    })

    for (let i = 0; i < sectionProgress.finishedQuizzes.length; i++) {
        if(sectionProgress.finishedQuizzes[i].quiz_id == material_id)
        {   
            throw Error('You already answered this quiz')
        }
      }

    var returnedGrade = 0
    var exception = -100000
    for (let i = 0; i < sectionProgress.solvedQuizzes.length; i++) {
        
        if(sectionProgress.solvedQuizzes[i].quiz_id == material_id)
        {   
            exception = 0
            returnedGrade = sectionProgress.solvedQuizzes[i].questionsAnswers[0].acquiredGrade + returnedGrade
        }
            
      }
    if(exception == -100000)
      throw Error('No Question is Answered In This Material')

    // await this.findByIdAndUpdate({
    //     _id: sectionProgress._id
    // }, {
    //     $push: {
    //         finishedQuizzes: {quiz_id:material_id},
    //     },
    //     materialNumber: ~~sectionProgress.materialNumber + 1,
    //     totalHours :~~sectionProgress.totalHours + ~~material.duration,
    //     totalPoints :~~sectionProgress.totalPoints + ~~material.totalPoints,
    //     finishedPercentage :((( ~~sectionProgress.materialNumber + 1)/(~~course.materialNumber))*100)
    // })

     return returnedGrade
 }

module.exports = mongoose.model('Section Progress', CourseSectionProgressSchema)