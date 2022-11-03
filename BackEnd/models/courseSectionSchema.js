const mongoose = require('mongoose')

const Schema = mongoose.Schema


const CourseSectionSchema = new Schema({

    course_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course',
        required: true

    },

    total_points: {
        type: Number, //TODO
    },
    total_hours: {
        type: Number, //TODO
    },
    maximum_grade: {
        type: Number, //TODO
    },
    assignments: [{
        assignment_id: mongoose.Schema.Types.ObjectId,
        ref: 'courseMaterial',

    }],
    videos: [{ //TODO
        video_id: mongoose.Schema.Types.ObjectId,
        ref: 'courseMaterial',
       // video_url: String, // make sure it exists in material schema

    }],
    quizes: [{
        quiz_id: mongoose.Schema.Types.ObjectId,
        ref: 'courseMaterial', //TODO
    }],

}, {
    timestamps: true
})



module.exports = mongoose.model('courseSection', CourseSectionSchema)