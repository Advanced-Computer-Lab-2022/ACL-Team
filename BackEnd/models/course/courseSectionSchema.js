const mongoose = require('mongoose')
const courseMaterialSchema = require('./courseMaterialSchema')

//Rabena ma3 el nas el gaya tktb hena
const Schema = mongoose.Schema


const CourseSectionSchema = new Schema({
    course_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course',
        required: true
    },
    sectionTitle: {
        type: String,
    },
    totalPoints: {
        type: Number,
    },
    totalHours: {
        type: Number,
    },
    maxGrade: {
        type: Number,
    },
    subtitles: [{
        subtitleHours: mongoose.Schema.Types.ObjectId,
        maxGrade: Number,
        totalPoints: Number,
        totalHours: Number,
    }],
}, {
    timestamps: true
})



module.exports = mongoose.model('courseSection', CourseSectionSchema)