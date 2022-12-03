const mongoose = require('mongoose')

const Schema = mongoose.Schema

const CourseRequestSchema = new Schema({
    requester_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    course_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course',
        required: true
    },
    status: {
        type: String,
        enum: ['Pending', 'Granted'],
        default: 'Pending'
    },    
}, {
    timestamps: true
})


module.exports = mongoose.model('Course Requests', CourseRequestSchema)