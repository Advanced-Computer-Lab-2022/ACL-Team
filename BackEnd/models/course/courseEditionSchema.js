const mongoose = require('mongoose')

const Schema = mongoose.Schema


const CourseEditionSchema = new Schema({

    course_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course',
        required: true

    },
    subject: {
        type: String,
        required: true
    },
    offered_in: {
        type: String,
        enum: ['Spring', 'Winter', 'Summer'],
        required: true
    },
    discount_id: {
        type: String,
        //TODO
    },
    start_date: {
        type: String,
        //TODO
    },
    end_date: {
        type: String,
        //TODO
    },
    awards: [{
        award_id: String, //TODO
    }],
    sections: [{
        section_id: String, //TODO
    }],

}, {
    timestamps: true
})

module.exports = mongoose.model('course Edition', CourseEditionSchema)