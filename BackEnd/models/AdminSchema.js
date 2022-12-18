const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const Schema = mongoose.Schema
const User = require('./UserSchema')
const Discount = require('./lib/payment/discountSchema')

const AdminSchema = new Schema({
    // user_id: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'User',
    //     required: true

    // },

}, {
    timestamps: true
})

AdminSchema.statics.signup = async function (email, username, password, firstname, lastname, gender) {

    const role = 'admin'

    const user = await User.signup(email, username, password, firstname, lastname, gender,role)

    const _id = user._id;

    const admin = await this.create({
        _id
    })

    return admin

}

AdminSchema.statics.adminAddDiscount = async function (admin_id, name, percentage, start_date, end_date) {

    const instructor = await this.findOne({
        _id: admin_id
    })

    if (!instructor)
        throw Error('Instructor does not Exist')

    var discount = await Discount.create({
        name,
        percentage,
        start_date,
        end_date
    })
    if(!discount)
        throw Error('Discount not created')

    var discountObj = {
        discount_id : discount._id,
        discountName:name
    }

    await this.findByIdAndUpdate({
            _id: admin_id
        }, {
            $push: {
                defined_discounts: discountObj
            },
        }
    )

    return discount

}

module.exports = mongoose.model('Admin', AdminSchema)