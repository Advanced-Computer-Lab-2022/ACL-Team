const mongoose = require('mongoose')

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
        required: true
    },
    finishedPercentage: {
        type: Double,
    },
    finishedHours: {
        type: Integer,
    },
    solvedSections: [{
        section_id: mongoose.Schema.Types.ObjectId, //CourseSection_id
        solvedQuizzes: [{
            quiz_id: mongoose.Schema.Types.ObjectId, //CourseMaterial_id
            questions_answers: [{
                question_id: mongoose.Schema.Types.ObjectId,
                choice: ['choice_1', 'choice_2', 'choice_3', 'choice_4'], //Enum 
            }],
            finishedPercentage: Double,
            AcquiredGrade: Integer,
            TotalGrade: Integer
        }],
        solvedAssignments: [{
            assignment_id: mongoose.Schema.Types.ObjectId, //CourseMaterial_id
            questions_answers: [{
                question_id: mongoose.Schema.Types.ObjectId,
                choice: ['choice_1', 'choice_2', 'choice_3', 'choice_4'], //Enum 
            }],
            finishedPercentage: Double,
            AcquiredGrade: Integer,
            TotalGrade: Integer
        }],
        watchedVideos: [{
            video_id: mongoose.Schema.Types.ObjectId, //CourseMaterial_id
            isWatched: Boolean,
            writtenNotes: String,
        }],
    }],

}, {
    timestamps: true
})



module.exports = mongoose.model('CourseProgress', CourseProgressSchema)