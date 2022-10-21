const mongoose = require('mongoose')

const Schema = mongoose.Schema

const courseSchema = new Schema({
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


courseSchema.index({id:'text'})
module.exports = mongoose.model('course', courseSchema)

//courses.find()
