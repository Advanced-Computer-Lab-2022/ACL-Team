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

InstructorSchema.statics.signup = async function (email, username, password, firstname, lastname, gender) {
    const user = await User.signup(email, username, password, firstname, lastname, gender)

    User.findByIdAndUpdate({
        _id: user._id
    }, {

        role: "instructor"
    })

    const instructor = await this.create({
        _id: user._id,
    })

    return instructor

}



module.exports = mongoose.model('Instructor', InstructorSchema)