const mongoose = require('mongoose')
const courseMaterialSchema = require('./courseMaterialSchema')
const courseSubtitleSchema = require('./courseSubtitleSchema')

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

CourseSectionSchema.statics.addSection = async function (course_id, sectionTitle,subtitelTitle,subtitlePreviewVideoUrl) {

    if (!course_id || !sectionTitle)
        throw error('All fields must be filled')

    const course = await this.find({
        _id: course_id
    })
    if (!course)
        throw Error('Course Does not Exist')
    
    const section = await this.create({
        course_id,
        sectionTitle
    })    
    const section_id = section._id;

    const subtitle = await courseSubtitleSchema.createSubtitle(course_id, section_id, subtitelTitle,subtitlePreviewVideoUrl)

}


module.exports = mongoose.model('courseSection', CourseSectionSchema)