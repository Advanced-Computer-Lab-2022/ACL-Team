const mongoose = require('mongoose')


const userSchema = new Schema({
    title: {
        type: String,
    },
    id: {
        type: Number,
        required: true
    },
    subject: {
        type: String,
        // required: true
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




module.exports = mongoose.model('User', UserSchema)