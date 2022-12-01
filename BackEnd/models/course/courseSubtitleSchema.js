const mongoose = require('mongoose')
const courseMaterialSchema = require('./courseMaterialSchema')
const Course = require('./courseSchema')
const CourseSectionSchema = require('./courseSectionSchema')



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
    },
    totalPoints: {
        type: Number,
    },
    materialNumber: {
        type: Number,
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
CourseSubtitleSchema.statics.createSubtitle = async function (course_id, section_id, title,subtitlePreviewVideoUrl) {
    if (!title || !course_id || !section_id || !subtitlePreviewVideoUrl)
        throw error('All fields must be filled')

        // mesh shaghal ama bythato bas homa lazm ythato
        // const course = await Course.findById({
        //     _id: course_id
        // })
        // const section = await courseSectionSchema.find({
        //     _id: section_id,
            
        // })
        // if (!course)
        //     throw Error('Course does not Exist')
        // if (!section)
        //     throw Error('Section does not Exist')

    const subtitle = await this.create({
        course_id,
        section_id,
        title,
        subtitlePreviewVideoUrl
    })
    return subtitle;
}

CourseSubtitleSchema.statics.addQuizQuestion = async function (course_id, section_id, subtitle_id, material_id, question_name, question, choice_1, choice_2, choice_3, choice_4,answer,grade) {
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
    const material = await this.find({
        'quizes.quiz_id': material_id

    })

    if (!course)
        throw Error('Course does not Exist')
    // if (!section)
    //     throw Error('Section does not Exist')
    if (!subtitle)
        throw Error('Section does not Exist')
    if (!material)
        throw Error('Quiz does not Exist')


    const questionObject = await courseMaterialSchema.addQuestion(material_id, question_name, question, choice_1, choice_2, choice_3, choice_4,answer,grade)

    return questionObject;
}
CourseSubtitleSchema.statics.addAssignmentQuestion = async function (course_id, section_id, subtitle_id, material_id, question_name, question, choice_1, choice_2, choice_3, choice_4) {
    if (!course_id || !section_id || !subtitle_id || !material_id || !question_name || !question || !choice_1 || !choice_2 || !choice_3 || !choice_4)
        throw error('All fields must be filled')

    const course = await Course.findOne({
        _id: course_id
    })
    const section = await CourseSectionSchema.findOne({
        _id: section_id
    })
    const subtitle = await this.findOne({
        _id: subtitle_id
    })
    const material = await this.find({
        'assignments.assignment_id': material_id
    })

    if (!course)
        throw Error('Course does not Exist')
    if (!section)
        throw Error('Section does not Exist')
    if (!subtitle)
        throw Error('Subtitle does not Exist')
    if (!material)
        throw Error('Assignment does not Exist')


    const questionObject = await courseMaterialSchema.addQuestion(material_id, question_name, question, choice_1, choice_2, choice_3, choice_4)

    return questionObject;
}


//MATERIAL CREATION
CourseSubtitleSchema.statics.addQuiz = async function (course_id, section_id, subtitle_id, quizName) {
    if (!course_id || !section_id || !subtitle_id || !quizName)
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

    await this.findByIdAndUpdate({
        _id: subtitle_id
    }, {
        $push: {
            quizes: quiz
        },
    })

    return quiz;
}
CourseSubtitleSchema.statics.addAssignment = async function (course_id, section_id, subtitle_id, assignmentName) {
    if (!course_id || !section_id || !subtitle_id || !assignmentName)
        throw error('All fields must be filled')

    const course = await Course.findOne({
        _id: course_id
    })
    const section = await CourseSectionSchema.findOne({
        _id: section_id
    })
    const subtitle = await this.findOne({
        _id: subtitle_id
    })

    if (!course)
        throw Error('Course does not Exist')

    if (!section)
        throw Error('Section does not Exist')

    if (!subtitle)
        throw Error('Section does not Exist')

    const assignment = await courseMaterialSchema.create({
        type: "assignment",
        assignmentName
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
CourseSubtitleSchema.statics.addVideo = async function (course_id, section_id, subtitle_id, videoName, videoUrl, videoDescription) {
    if (!course_id || !section_id || !subtitle_id || !videoName || !videoUrl || !videoDescription)
        throw error('All fields must be filled')

    const course = await Course.findOne({
        _id: course_id
    })
    const section = await courseSectionSchema.findOne({
        _id: section_id
    })
    const subtitle = await this.findOne({
        _id: subtitle_id
    })

    if (!course)
        throw Error('Course does not Exist')

    if (!section)
        throw Error('Section does not Exist')

    if (!subtitle)
        throw Error('Section does not Exist')

    const video = await courseMaterialSchema.create({
        type: "video",
        videoName,
        material_doc: videoUrl,
        videoDescription
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