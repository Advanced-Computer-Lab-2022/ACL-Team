const mongoose = require('mongoose')

const Schema = mongoose.Schema


const NotificationsSchema = new Schema({

    notification: {
        type: String
    },
    sender_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true

    },
    reciever_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true

    },
    issue_time: {
        type: Date

    },


}, {
    timestamps: true
})



module.exports = mongoose.model('notification', NotificationsSchema)