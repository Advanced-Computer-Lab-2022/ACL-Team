const mongoose = require('mongoose')

const Schema = mongoose.Schema

const AdminSchema = new Schema({
    Id: {
        type: Number,
        required: true
    },
   
    Name: {
        type: String,
        // required: true
    },
    
    Password: {
        type: String,
        // required: true
    },
    
    Gender: {
        type: String
    }

}, { timestamps: true })


AdminSchema.index({id:'text'})
module.exports = mongoose.model('Admin', AdminSchema)


