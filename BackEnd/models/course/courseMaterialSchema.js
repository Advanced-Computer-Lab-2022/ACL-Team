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
        default:0
    },
    maxGrade: {
        type: Number,
        default:0
    },
    duration: {
        type: Number, //ALWAYS IN HOURS
        default:0
    },
    questions: [{
        question_id: mongoose.Schema.Types.ObjectId,
        questionTitle:String,
        question:String,
        choices: [{
            choice_1: String,
            choice_2: String,
            choice_3: String,
            choice_4: String,
        }],
        answer:String,
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
        maxGrade:~~grade
    })

    const questionObject = {
        question_id:questions._id,
        questionTitle:question_name,
        question,
        choices,
        answer,

    }

    if(material.maxGrade == undefined)
    {
        await this.findByIdAndUpdate({
            _id: material_id
        }, {
            maxGrade: 0
        }

    )
    }
    await this.findByIdAndUpdate({
            _id: material_id
        }, {
            $push: {
                questions: questionObject
            },
            maxGrade: (material.maxGrade + (~~grade))
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
CourseMaterialSchema.statics.editQuestionChoices = async function (material_id, choice_1, choice_2, choice_3, choice_4) {
    

}

CourseMaterialSchema.statics.setQuizAnswer = async function (material_id, choice) {
    return await Question.findByIdAndUpdate({
        _id: material_id
    }, {
        answer: choice
    })

}

module.exports = mongoose.model('course Material', CourseMaterialSchema)