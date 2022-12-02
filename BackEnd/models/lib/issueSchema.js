const mongoose = require('mongoose')

const Schema = mongoose.Schema

const IssueSchema = new Schema({
    issueRequester_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    course_id: { // el course el 3amel el moshkela
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    type: {
        type: String,
        enum: ['Technical', 'Financial', 'Other'],
        default: 'Other'
    },
    status: {
        type: String,
        enum: ['Resolved', 'Pending', 'Unseen'],
        default: 'Unseen'
    },
    issue: {
        type: String,
        required: true
    },
    resolver_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Admin',
    },
    resolverComment: {
        type: String,
    },

}, {
    timestamps: true
})

module.exports = mongoose.model('Issue Schema', IssueSchema)