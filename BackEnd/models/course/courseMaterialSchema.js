const mongoose = require('mongoose')

const Schema = mongoose.Schema


const CourseMaterialSchema = new Schema({

    type: {
        type: String,
        enum: ['assignment', 'video', 'quiz', 'grade'],
        required: true
    },
    material_doc: {
        type: String, //TODOOOOOOOOOOOOOOOOOOOOOO
    },
    name: {
        type: String, //TODOOOOOOOOOOOOOOOOOOOOOO
        required: true
    },
    description: {
        type: String, //TODOOOOOOOOOOOOOOOOOOOOOO
    },
    deadline: {
        type: Date, //TODOOOOOOOOOOOOOOOOOOOOOO
    },
    total_points: {
        type: Number, //TODO
    },
    total_hours: {
        type: Number, //TODO
    },
    maximum_grade: {
        type: Number
    },
    questions: [{
        question_name: String[unique],
        question: String,
        choices: [{
            choice_1: String,
            choice_2: String,
            choice_3: String,
            choice_4: String,
        }],
        answer: {
            type: String,
            enum: ['choice_1', 'choice_2', 'choice_3', 'choice_4', 'no_answer'],
            default: 'no_answer'
        },
    }],
    comments: [{
        comment_id: mongoose.Schema.Types.ObjectId
        //TODO
    }],


}, {
    timestamps: true
})
//only to be used if video
// in the video the doc is the video url
CourseMaterialSchema.statics.editVideoUrl = async function (video_id, newUrl) {

    return await this.findByIdAndUpdate({
        _id: video_id
    }, {
        material_doc: newUrl
    })

}
//only to be used if quiz or assignment
CourseMaterialSchema.statics.addQuestion = async function (material_id, question_name, question, choice_1, choice_2, choice_3, choice_4) {

    const question = {
        question_name: question_name,
        question: question,
        choices: [{
            choice_1: choice_1,
            choice_2: choice_2,
            choice_3: choice_3,
            choice_4: choice_4,
        }]
    }

    await this.findByIdAndUpdate({
            _id: material_id
        }, {
            $push: {
                questions: question
            },
        }

    )
    return question
}
CourseMaterialSchema.statics.editQuestion = async function (material_id, oldQuestionName, newQuestionName, newQuestion) {

    await this.findByIdAndUpdate({
        _id: material_id,
        name: oldQuestionName
    }, {
        name: newQuestionName,
        question: newQuestion
    })

    return await this.findbyId(material_id)
}
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
// Material Creation
CourseMaterialSchema.statics.createAssignment = async function (name) {

    const assignment = await this.create({
        type: "assignment",
        name
    })

    return assignment

}
CourseMaterialSchema.statics.createVideo = async function (name, video_url, description) {

    const video = await this.create({
        type: "video",
        name,
        material_doc: video_url,
        description

    })

    return video

}
CourseMaterialSchema.statics.createQuiz = async function (name) {

    const quiz = await this.create({
        type: "quiz",
        name
    })

    return quiz

}
module.exports = mongoose.model('courseMaterial', CourseMaterialSchema)