const mongoose = require('mongoose')
const Discount = require('../models/discountSchema')
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

//percentage is assumed to be like 20
InstructorSchema.statics.addDiscount = async function (instructor_id, name, percentage, start_date, end_date) {
    const newPercentage = percentage / 100;


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



module.exports = mongoose.model('Instructor', InstructorSchema)