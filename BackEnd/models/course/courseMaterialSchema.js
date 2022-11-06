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
        question_name: String,
        question: String,
        choices: [{
            choice_1: String,
            choice_2: String,
            choice_3: String,
            choice_4: String,
        }]
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
CourseMaterialSchema.statics.editQuizChoices = async function (quiz_id, choice_1, choice_2, choice_3, choice_4) {
    const choices = [{
        choice_1: choice_1,
        choice_2: choice_2,
        choice_3: choice_3,
        choice_4: choice_4,
    }]
    await this.findByIdAndUpdate({
        _id: quiz_id
    }, {
        choices: choices
    })

    return await this.findbyId(quiz_id)
}

//only to be used if quiz
CourseMaterialSchema.statics.addQuizQuestion = async function (quiz_id, question_name, question, choice_1, choice_2, choice_3, choice_4) {

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
            _id: quiz_id
        }, {
            $push: {
                questions: question
            },
        }

    )
    return question
}
CourseMaterialSchema.statics.editQuizQuestion = async function (quiz_id, newQuestionName, newQuestion) {

    await this.findByIdAndUpdate({
        _id: quiz_id
    }, {
        name: newQuestionName,
        question: newQuestion
    })

    return await this.findbyId(quiz_id)
}
CourseMaterialSchema.statics.editQuizChoices = async function (quiz_id, choice_1, choice_2, choice_3, choice_4) {
    const choices = [{
        choice_1: choice_1,
        choice_2: choice_2,
        choice_3: choice_3,
        choice_4: choice_4,
    }]
    await this.findByIdAndUpdate({
        _id: quiz_id
    }, {
        choices: choices
    })

    return await this.findbyId(quiz_id)
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