const mongoose = require('mongoose')
const Discount = require('./lib/payment/discountSchema')
const User = require('../models/UserSchema')

const Schema = mongoose.Schema

const InstructorSchema = new Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true

    },
    name: {
        type: String,
    },
    biography: {
        type: String,
    },
    offered_courses: [{
        course_id: mongoose.Schema.Types.ObjectId, //TODO
    }],
    defined_discounts: [{
        discount_id: mongoose.Schema.Types.ObjectId, //TODO
    }],
    prefferedSubject: {
        type: String,
        enum: ['Web Development', 'Intermediate', 'Mathematics', 'Web Design'],
    },
    reviews: [{
        reviewer_id: mongoose.Schema.Types.ObjectId,
        review_id: mongoose.Schema.Types.ObjectId,
        //type: String,
        reviewString : String,
        
    }],
    issues: [{
        issue_id: mongoose.Schema.Types.ObjectId,
        status: String,
    }],
}, {
    timestamps: true
})

InstructorSchema.statics.signup = async function (email, username, password, firstname, lastname, gender) {

    const role = 'instructor'
    const user = await User.signup(email, username, password, firstname, lastname, gender,role)


    const instructor = await this.create({
        _id: user._id,
        name:firstname + lastname,
    })

    return instructor

}

InstructorSchema.statics.addDiscount = async function (instructor_id, name, percentage, start_date, end_date) {

    const discount = await Discount.create({
        name,
        percentage,
        start_date,
        end_date
    })

    await this.findByIdAndUpdate({
            _id: instructor_id
        }, {
            $push: {
                defined_discounts: discount._id
            },
        }
    )

    return discount

}
//mehtaga had y3mlha ashan feh hagat kteer awy zay el discount abl man apply el discount lazm nt2kd eno aslan bydy el course dah
InstructorSchema.statics.isTeachCourse = async function (instructor_id, course_id) {


}



module.exports = mongoose.model('Instructor', InstructorSchema)