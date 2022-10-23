const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    id: {
        type: Number,
        required: true
    },
    isCoroprate: {
        type: Boolean,
        required: true
    },
    username: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    boughtCourses: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    creditCardDetails: {
        type: String,
        required: true
    },

    //lesa fee ba2y
}, { timestamps: true })




module.exports = mongoose.model('User', UserSchema)