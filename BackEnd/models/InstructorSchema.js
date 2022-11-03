const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')
const Schema = mongoose.Schema

const InstructorSchema = new Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true

    },
    biography: {
        type: String,
    },
    offered_courses: [{
        course_id: mongoose.Schema.Types.ObjectId, //TODO
    }],



}, {
    timestamps: true
})



module.exports = mongoose.model('Instructor', InstructorSchema)