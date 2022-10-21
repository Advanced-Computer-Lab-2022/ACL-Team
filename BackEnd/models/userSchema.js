const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
    username: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        // required: true
    },
    price: {
        type: Number,
        // required: true
    }
}, { timestamps: true })

module.exports = mongoose.model('User', userSchema)