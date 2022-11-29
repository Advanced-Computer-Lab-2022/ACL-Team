const mongoose = require('mongoose')

const Schema = mongoose.Schema

const QuestionSchema = new Schema({
    material_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course Material',
        required: true
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    questionTitle:String,
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
}, {
    timestamps: true
})



module.exports = mongoose.model('Questions', QuestionSchema)