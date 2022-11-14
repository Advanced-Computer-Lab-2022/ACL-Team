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

}, {
    timestamps: true
})

module.exports = mongoose.model('IssueSchema', IssueSchema)