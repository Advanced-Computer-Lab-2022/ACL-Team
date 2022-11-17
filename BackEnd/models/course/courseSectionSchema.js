const mongoose = require('mongoose')

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
        previewVideoUrl: String,
        assignments: [{
            assignment_id: mongoose.Schema.Types.ObjectId,
            ref: 'courseMaterial',
            maxGrade: Number,
        }],
        videos: [{
            video_id: mongoose.Schema.Types.ObjectId,
            ref: 'courseMaterial',
            video_url: String,
        }],
        quizes: [{
            quiz_id: mongoose.Schema.Types.ObjectId,
            ref: 'courseMaterial',
            maxGrade: Number,
        }],
    }],
}, {
    timestamps: true
})

CourseSectionSchema.statics.createSection = async function (course_id, sectionTitle) {

    const section = await this.create({
        course_id,
        sectionTitle
    })

    return section
}



module.exports = mongoose.model('courseSection', CourseSectionSchema)