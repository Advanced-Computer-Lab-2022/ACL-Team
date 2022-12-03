const mongoose = require('mongoose')
const courseMaterialSchema = require('./courseMaterialSchema')
const Course = require('./courseSchema')
const CourseSection = require('./courseSectionSchema')



const Schema = mongoose.Schema


const CourseSubtitleSchema = new Schema({

    course_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course',
        required: true
    },
    section_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'CourseSection',
        required: true
    },
    title: {
        type: String,
        required: true
    },
    totalHours: {
        type: Number,
        default : 0,
    },
    type:{
        type: String,
        enum: ['Lecture', 'Tutorial', 'Revision'],
        default: 'Lecture'
    },
    totalPoints: {
        type: Number,
        default : 0,
    },
    materialNumber: {
        type: Number,
        default : 0,
    },
    maxGrade: {
        type: Number,
    },
    subtitlePreviewVideoUrl: {
        type: String,
        required: true,
    },
    assignments: [{
        assignment_id: mongoose.Schema.Types.ObjectId,
       // ref: 'courseMaterial',
        maxGrade: Number,//TODO
    }],
    videos: [{
        video_id: mongoose.Schema.Types.ObjectId,
       // ref: 'courseMaterial',
        video_url: String,
    }],
    quizes: [{
        quiz_id: mongoose.Schema.Types.ObjectId,
       // ref: 'courseMaterial',
        maxGrade: Number,//TODO
    }],

}, {
    timestamps: true
})
CourseSubtitleSchema.statics.createSubtitle = async function (course_id, section_id, title,subtitlePreviewVideoUrl,type) {
    if ( !title || !course_id || !section_id || !subtitlePreviewVideoUrl || !type )
        throw error('All fields must be filled')

       // mesh shaghal ama bythato bas homa lazm ythato
        const course = await Course.findOne({
            _id: course_id
        })
        // const section = await CourseSection.findOne({
        //     _id: section_id,
            
        // })
        if (!course)
            throw Error('Course does not Exist')
        // if (!section)
        //     throw Error('Section does not Exist')

    const subtitle = await this.create({
        course_id,
        section_id,
        title,
        subtitlePreviewVideoUrl,
        type
    })
    return subtitle;
}
CourseSubtitleSchema.statics.addQuestion = async function (course_id, section_id, subtitle_id, material_id, question_name, question, choice_1, choice_2, choice_3, choice_4,answer,grade) {
    if (!course_id || !section_id || !subtitle_id || !material_id || !question_name || !question || !choice_1 || !choice_2 || !choice_3 || !choice_4 || !answer || !grade )
        throw error('All fields must be filled')

    const course = await Course.findOne({
        _id: course_id
    })
    // const section = await CourseSectionSchema.findOne({
    //     _id: section_id
    // })
    const subtitle = await this.findOne({
        _id: subtitle_id
    })
    var material = await courseMaterialSchema.findOne({
        _id: material_id
    })

    if (!course)
        throw Error('Course does not Exist')
    // if (!section)
    //     throw Error('Section does not Exist')
    if (!subtitle)
        throw Error('Section does not Exist')
    if (!material)
        throw Error('Material does not Exist')


    const questionObject = await courseMaterialSchema.addQuestion(material_id, question_name, question, choice_1, choice_2, choice_3, choice_4,answer,grade)

    material = await courseMaterialSchema.findByIdAndUpdate({
        _id :material_id
    }, {
        maxGrade: ~~material.maxGrade + ~~questionObject.maxGrade
    })

    return questionObject;
}
//MATERIAL CREATION
CourseSubtitleSchema.statics.addQuiz = async function (course_id, section_id, subtitle_id, quizName,duration,points) {
    if (!course_id || !section_id || !subtitle_id || !quizName || !duration || !points) 
        throw error('All fields must be filled')

    const course = await Course.findOne({
        _id: course_id
    })
    // const section = await CourseSectionSchema.findOne({
    //     _id: section_id
    // })
    const subtitle = await this.findOne({
        _id: subtitle_id
    })

    if (!course)
        throw Error('Course does not Exist')

    // if (!section)
    //     throw Error('Section does not Exist')

    if (!subtitle)
        throw Error('Section does not Exist')

    const quiz = await courseMaterialSchema.create({
        type: "quiz",
        name:quizName,
    })
    
    await Course.findByIdAndUpdate({
        _id: course_id
    }, {
        materialNumber: ~~course.materialNumber + 1,
        totalHours : ~~course.totalHours + ~~duration,
        totalPoints : ~~course.totalPoints + ~~points
    })

    await this.findByIdAndUpdate({
        _id: subtitle_id
    }, {
        $push: {
            quizes: quiz
        },
    })


    return quiz;
}
CourseSubtitleSchema.statics.addAssignment = async function (course_id, section_id, subtitle_id, assignmentName,duration,points) {
    if (!course_id || !section_id || !subtitle_id || !assignmentName || !duration || !points)
        throw error('All fields must be filled')

    const course = await Course.findOne({
        _id: course_id
    })
    // const section = await CourseSectionSchema.findOne({
    //     _id: section_id
    // })
    const subtitle = await this.findOne({
        _id: subtitle_id
    })

    if (!course)
        throw Error('Course does not Exist')

    // if (!section)
    //     throw Error('Section does not Exist')

    if (!subtitle)
        throw Error('Section does not Exist')

    const assignment = await courseMaterialSchema.create({
        type: "assignment",
        name:assignmentName
    })

    await Course.findByIdAndUpdate({
        _id: course_id
    }, {
        materialNumber: ~~course.materialNumber + 1,
        totalHours : ~~course.totalHours + ~~duration,
        totalPoints : ~~course.totalPoints + ~~points
    })


    await this.findByIdAndUpdate({
        _id: subtitle_id
    }, {
        $push: {
            assignments: assignment
        },
    })

    return assignment;
}
CourseSubtitleSchema.statics.addVideo = async function (course_id, section_id, subtitle_id, videoName, videoUrl, videoDescription,duration,points) {
    if (!course_id || !section_id || !subtitle_id || !videoName || !videoUrl || !videoDescription || !duration || !points)
        throw error('All fields must be filled')

    const course = await Course.findOne({
        _id: course_id
    })
    // const section = await CourseSectionSchema.findOne({
    //     _id: section_id
    // })
    const subtitle = await this.findOne({
        _id: subtitle_id
    })

    if (!course)
        throw Error('Course does not Exist')

    // if (!section)
    //     throw Error('Section does not Exist')

    if (!subtitle)
        throw Error('Section does not Exist')

    const video = await courseMaterialSchema.create({
        type: "video",
        name:videoName,
        material_doc: videoUrl,
        videoDescription
    })

    await Course.findByIdAndUpdate({
        _id: course_id
    }, {
        materialNumber: ~~course.materialNumber + 1,
        totalHours : ~~course.totalHours + ~~duration,
        totalPoints : ~~course.totalPoints + ~~points
    })

    await this.findByIdAndUpdate({
        _id: subtitle_id
    }, {
        $push: {
            videos: video
        },
    })

    return video;
}



module.exports = mongoose.model('course Subtitle', CourseSubtitleSchema)