const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')
const Schema = mongoose.Schema
const User = require('../models/UserSchema')

const TraineeSchema = new Schema({

    _id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true

    },
    isCorporate: {
        type: Boolean,
        required: true

    },
    credticard_details: {
        type: String,

    },
    owned_courses: [{
        course_id: String, //TODO
    }],
    followed_courses: [{
        course_id: String, //TODO
    }],
    total_points: {
        type: Number,

    },
    info: [{
        degree: String,
        current_job_title: String,
        university_name: String,
        university_faculty: String,
        years_experience: String,
        company: String

    }],


    //lesa fee ba2y
}, {
    timestamps: true,
    collection: "trainee"
})
TraineeSchema.statics.signup = async function (email, username, password, firstname, lastname, gender) {

    const user = await User.signup(email, username, password, firstname, lastname, gender)

    User.findByIdAndUpdate({
        _id: user._id
    }, {

        role: "trainee"
    })

    const trainee = await this.create({
        _id: user._id,
        isCorporate: false
    })


    return trainee

}


module.exports = mongoose.model('trainee', TraineeSchema)