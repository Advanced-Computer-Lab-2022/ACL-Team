const mongoose = require('mongoose')

const Schema = mongoose.Schema

const InstructorSchema = new Schema({
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
    },
    
    OfferedCourses: {
        type: String,
        // required: true
    },

    Biography: {
        type: String
    },

    Email: {
        type: String
    },

}, { timestamps: true })


InstructorSchema.index({id:'text'})
module.exports = mongoose.model('Instructor', InstructorSchema)


