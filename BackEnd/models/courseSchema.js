const mongoose = require('mongoose')

const Schema = mongoose.Schema


const CourseSchema = new Schema({
    instructor_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Instructor',
        required: true

    },
    title: {
        type: String,
        required: 'title is required',

    },
    total_rating: {
        type: Number,
    },
    category_id: {
        type: String, //TODO
    },
    summary: {
        type: String,
        required: true
    },
    price: {
        type: Number,
    },
    max_grade: {
        type: Number,
    },
    total_hours: {
        type: Number,
    },
    total_points: {
        type: Number,
    },
    awards: [{
        award_id: String, //TODO
    }]




}, {
    timestamps: true
})



module.exports = mongoose.model('course', CourseSchema)