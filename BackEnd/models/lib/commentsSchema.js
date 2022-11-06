const mongoose = require('mongoose')

const Schema = mongoose.Schema


const CommentSchema = new Schema({

    commenter_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true

    },
    comment: {
        type: String,
        required: true
    },
    upvotes: {
        type: Number,
    },
    downvotes: {
        type: Number,
    },
    replies: [{
        comment_id: mongoose.Schema.Types.ObjectId,
        ref: 'comment', //TODO
        reply: String
    }],

}, {
    timestamps: true
})



module.exports = mongoose.model('comment', CommentSchema)