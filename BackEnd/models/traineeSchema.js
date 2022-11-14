const mongoose = require('mongoose')
const Schema = mongoose.Schema
const User = require('../models/UserSchema')
const Instructor = require('../models/InstructorSchema')
const Course = require('../models/course/courseSchema')
const Review = require('../models/lib/reviewSchema')

const TraineeSchema = new Schema({

    _id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    user_id: {
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
})
TraineeSchema.statics.signup = async function (email, username, password, firstname, lastname, gender) {

    const user = await User.signup(email, username, password, firstname, lastname, gender)

    User.findByIdAndUpdate({
        _id: user._id
    }, {
        role: "trainee"
    })


    const trainee = await this.create({
        user_id: user._id,
        isCorporate: false
    })


    return trainee

}
TraineeSchema.statics.reviewInstructor = async function (_id, course_id, instructor_id, type, reviewString) {

    if (!course_id || !instructor_id || !type || !reviewString)
        throw Error('All fields must be filled')

    const course = await Course.findOne({
        course_id
    })
    const instructor = await Instructor.findOne({
        instructor_id
    })

    if (!courseExist)
        throw Error('Course Does not Exist')

    if (!instructor)
        throw Error('Instructor Does not Exist')

    const review = await Review.create({
        reviewer_id: _id,
        reviewed_id: instructor_id,
        type,
        reviewString
    })

    instructor = await Instructor.findByIdAndUpdate({
            _id: instructor_id
        }, {
            $push: {
                reviews: review._id,
                type
            },
        }

    )

    return review;
}


module.exports = mongoose.model('trainee', TraineeSchema)