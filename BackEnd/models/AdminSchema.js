const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const Schema = mongoose.Schema

const AdminSchema = new Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
         ref: 'User',
         required: true

    },
    
}, { timestamps: true })

module.exports = mongoose.model('Admin', AdminSchema)


