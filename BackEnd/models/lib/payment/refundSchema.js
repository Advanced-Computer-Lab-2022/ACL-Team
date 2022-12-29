const mongoose = require('mongoose')

const Schema = mongoose.Schema


const RefundSchema = new Schema({
    payment_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Payment',
    },
    course_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course',
        required: true
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    status: {
        type: Boolean, // if granted then true
        default : false,
    },

}, {
    timestamps: true
})



module.exports = mongoose.model('Refund Requests', RefundSchema)