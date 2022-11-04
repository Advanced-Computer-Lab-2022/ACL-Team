const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const Schema = mongoose.Schema

const AdminSchema = new Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true

    },

}, {
    timestamps: true
})

AdminSchema.statics.signup = async function (email, username, password, firstname, lastname, gender) {
    const user = await User.signup(email, username, password, firstname, lastname, gender)

    User.findByIdAndUpdate({
        _id: user._id
    }, {

        role: "instructor"
    })

    const admin = await this.create({
        _id: user._id,
    })

    return admin

}

module.exports = mongoose.model('Admin', AdminSchema)