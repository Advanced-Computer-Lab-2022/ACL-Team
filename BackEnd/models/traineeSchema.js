const mongoose = require('mongoose')
const Schema = mongoose.Schema
const User = require('../models/UserSchema')
const Instructor = require('../models/InstructorSchema')
const Course = require('../models/course/courseSchema')
const Review = require('../models/lib/reviewSchema')

const TraineeSchema = new Schema({

    _id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    name: {
        type: String,
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
    
    const role = 'trainee'
    const user = await User.signup(email, username, password, firstname, lastname, gender,role)

    const _id = user._id;

    

    const trainee = await this.create({
        _id,
        isCorporate: false,
        name:firstname + lastname,
    })


    return trainee

}
TraineeSchema.statics.reviewInstructor = async function (_id, instructor_id, type, reviewString) {

    if (!_id || !instructor_id || !type || !reviewString)
        throw Error('All fields must be filled')

    const instructor = await Instructor.findOne({
        instructor_id
    })
    if (!instructor)
        throw Error('Instructor Does not Exist')

    const review = await Review.create({
        reviewer_id: _id,
        reviewed_id:instructor_id,
        type : type,
        review : reviewString,
    })

    const instructorReview = {
        reviewer_id:_id,
        review_id: review._id.toString(),
        reviewString:reviewString,
        
    }

    instructor = await Instructor.findByIdAndUpdate({
            _id: instructor_id
        }, {
            $push: {
                reviews: instructorReview
            },
        }

    )

    return review;
}


module.exports = mongoose.model('trainee', TraineeSchema)