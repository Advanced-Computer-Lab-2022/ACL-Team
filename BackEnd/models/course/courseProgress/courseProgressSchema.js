const mongoose = require('mongoose')
const CourseMaterial = require('../courseMaterialSchema')

const Schema = mongoose.Schema

const CourseProgressSchema = new Schema({
    course_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course',
        required: true
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    course_edition: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'CourseEdition',
    },
    courseReview_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'review',
    },
    finishedPercentage: {
        type: Number,
    },
    courseTitle: {
        type: String,
    },
    username: {
        type: String,
    },
    totalHours: {
        type: Number,
    },
    maxGrade: {
        type: Number,
    },
    totalPoints: {
        type: Number,
    },
    finishedHours: {
        type: Number,
    },
    acquiredGrade: {
        type: Number,
    },
    acquiredPoints: {
        type: Number,
    },
    solvedSections: [{
        sectionProgress_id: mongoose.Schema.Types.ObjectId, //CourseSectionProgress_id
        sectionTitle : String,
    }],

}, {
    timestamps: true
})



module.exports = mongoose.model('Course Progress', CourseProgressSchema)