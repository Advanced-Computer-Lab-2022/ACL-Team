const mongoose = require('mongoose')
const Schema = mongoose.Schema
const User = require('../models/UserSchema')
const Instructor = require('../models/InstructorSchema')
const Course = require('../models/course/courseSchema')
const Review = require('../models/lib/reviewSchema')
const CourseProgress = require('./course/courseProgress/courseProgressSchema')

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
    ownedCourses: [{
        course_id: mongoose.Schema.Types.ObjectId,
        courseTitle:String, //TODO
    }],
    followedCourses: [{
        course_id: String, //TODO
    }],
    totalPoints: {
        type: Number,

    },
    info: [{
        degree: String,
        currentJobTitle: String,
        universityName: String,
        universityFaculty: String,
        yearsExperience: String,
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

    var instructor = await Instructor.findOne({
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
//Should only be called after payment is confirmed
TraineeSchema.statics.joinCourse = async function (_id, course_id) {

    if (!_id || !course_id)
        throw Error('All fields must be filled')

    const user = await User.findOne({
        _id
    })
    if (!user)
        throw Error('User Does not Exist')

    const course = await Course.findOne({
        course_id
    })
    if (!course)
        throw Error('Course Does not Exist')

    const courseProgress = await CourseProgress.create({
        course_id,
        user_id:_id,
        courseTitle:course.title,
        username:user.username,
    })

    const courseObj = {
        course_id:course_id,
        courseTitle:course.title
    }
    const trainee = await this.findByIdAndUpdate({
            _id
        }, {
            $push: {
                ownedCourses: courseObj
            },
        }

    )

    const enrolledStudent = {
        user_id: user._id,
        username:user.username, 
    }
    
    await Course.findByIdAndUpdate({
        _id:course_id
    },{
        $push: {
            enrolledStudents: enrolledStudent
        },
    })

    return trainee;
}


module.exports = mongoose.model('trainee', TraineeSchema)