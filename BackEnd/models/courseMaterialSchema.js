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
        required: true
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
    comments: [{
        comment_id: String
        //TODO
    }],


}, {
    timestamps: true
})



module.exports = mongoose.model('courseMaterial', CourseMaterialSchema)