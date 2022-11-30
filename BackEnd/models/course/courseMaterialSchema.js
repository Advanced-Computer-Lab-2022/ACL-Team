const mongoose = require('mongoose');
const Question = require('./questionSchema');

const Schema = mongoose.Schema
var ObjectID = require('mongodb').ObjectID;
//WARNING
//THIS SCHEMA IS NEVER TO BE USED OUTSIDE COURSE SUBTITLE IT IS FOR INTERNAL USE ONLY. USING MAY WRECK DATABASE INTEGRITY
//WARNING
const CourseMaterialSchema = new Schema({
    type: {
        type: String,
        enum: ['assignment', 'video', 'quiz', 'grade'],
        required: true
    },
    material_doc: {
        type: String, //video URL
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String, //TODOOOOOOOOOOOOOOOOOOOOOO
    },
    deadline: {
        type: Date, //TODOOOOOOOOOOOOOOOOOOOOOO
    },
    totalPoints: {
        type: Number, //TODO
    },
    totalHours: {
        type: Number, //TODO
    },
    maxGrade: {
        type: Number,
    },
    duration: {
        type: Number, //Mainly for video //TODO //ALWAYS IN HOURS
    },
    questions: [{
        question_id: mongoose.Schema.Types.ObjectId,
        questionTitle:String,
       
    }],
    comments: [{
        commenter_id: mongoose.Schema.Types.ObjectId,
        comment : String,
    }],


}, {
    timestamps: true
})
//only to be used if video
// in the video the doc is the video url

CourseMaterialSchema.statics.editVideoUrl = async function (material_id, newUrl) {

    return await this.findByIdAndUpdate({
        _id: material_id
    }, {
        material_doc: newUrl
    })

}

//only to be used if quiz or assignment
CourseMaterialSchema.statics.addQuestion = async function (material_id, question_name, question, choice_1, choice_2, choice_3, choice_4,answer,grade) {

    if (!material_id || !question_name || !question || !choice_1 || !choice_2 || !choice_3 || !choice_4 || !answer || !grade)
        throw error('All fields must be filled')

    const material = await this.findOne({
        _id:material_id
    })
    
    if (!material)
        throw Error('This Material Does not Exist')

    const choices={
        choice_1: choice_1,
        choice_2: choice_2,
        choice_3: choice_3,
        choice_4: choice_4,
    }
    const questions = await Question.create({
        material_id,
        questionTitle:question_name,
        question,
        choices,
        answer,
        maxGrade:grade
    })

    const questionObject = {
        question_id:question._id,
        questionTitle:question_name
    }
    await this.findByIdAndUpdate({
            _id: material_id
        }, {
            $push: {
                questions: questionObject
            },
        }

    )
    return questions
}

CourseMaterialSchema.statics.editQuestion = async function (material_id, question_id, newQuestionName, newQuestion, choice_1, choice_2, choice_3, choice_4,answer,grade) {

    if (!material_id || !question_id || !newQuestionName|| !newQuestion || !choice_1 || !choice_2 || !choice_3 || !choice_4 || !answer || !grade)
        throw error('All fields must be filled')

    const material = await this.findOne({
        _id:material_id
    })
    
    if (!material)
        throw Error('This Material Does not Exist')

    const choices={
        choice_1: choice_1,
        choice_2: choice_2,
        choice_3: choice_3,
        choice_4: choice_4,
    }
        return await Question.findByIdAndUpdate({
            _id: question_id
        }, {
            questionTitle: newQuestionName,
            question:newQuestion,
            choices,
            answer,
            maxGrade:grade
        })
}

//Men awel hena mosamam mesh 3aref en el quizes ba2et f table lwahdaha
CourseMaterialSchema.statics.editQuizChoices = async function (material_id, choice_1, choice_2, choice_3, choice_4) {
    const choices = [{
        choice_1: choice_1,
        choice_2: choice_2,
        choice_3: choice_3,
        choice_4: choice_4,
    }]
    return await this.findByIdAndUpdate({
        _id: material_id
    }, {
        choices: choices
    })

}
CourseMaterialSchema.statics.editAssignmentChoices = async function (material_id, question_name, choice_1, choice_2, choice_3, choice_4) {
    const choices = [{
        choice_1: choice_1,
        choice_2: choice_2,
        choice_3: choice_3,
        choice_4: choice_4,
    }]
    return await this.findByIdAndUpdate({
        _id: material_id,
        name: question_name
    }, {
        choices: choices
    })

}
CourseMaterialSchema.statics.setQuizAnswer = async function (material_id, choice) {
    return await this.findByIdAndUpdate({
        _id: material_id
    }, {
        answer: choice
    })

}
CourseMaterialSchema.statics.setAssignmentAnswer = async function (material_id, question_name, choice) {
    return await this.findByIdAndUpdate({
        _id: material_id,
        name: question_name
    }, {
        answer: choice
    })

}
module.exports = mongoose.model('course Material', CourseMaterialSchema)