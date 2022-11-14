const mongoose = require('mongoose')
const Discount = require('./lib/discountSchema')
const User = require('../models/UserSchema')

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
    defined_discounts: [{
        discount_id: mongoose.Schema.Types.ObjectId, //TODO
    }],
    reviews: [{
        review_id: mongoose.Schema.Types.ObjectId,
        type: String,
    }],
    issues: [{
        issue_id: mongoose.Schema.Types.ObjectId,
        status: String,
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
InstructorSchema.statics.addDiscount = async function (instructor_id, name, percentage, start_date, end_date) {

    const discount = await Discount.create({
        name,
        percentage: newPercentage,
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