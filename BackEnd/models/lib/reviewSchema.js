const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ReviewSchema = new Schema({
    reviewer_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    reviewed_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    type: {
        type: String,
        enum: ['Positive', 'Neutral', 'Negative'],
        default: 'Neutral'
    },
    review: {
        type: String,
        required: true
    },

}, {
    timestamps: true
})



module.exports = mongoose.model('Reviews', ReviewSchema)