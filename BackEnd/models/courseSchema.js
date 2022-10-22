const mongoose = require('mongoose')

const Schema = mongoose.Schema

const courseSchema = new Schema({
    Id: {
        type: Number,
        required: true
    },

    Title: {
        type: String,
    },
   
    Price: {
        type: Number,
        // required: true
    },
    
    Ratings: {
        type: Number,
        // required: true
    },
    
    Category: {
        type: String
    },
    
    Subject: {
        type: String,
        // required: true
    },

    Instructor_id: {
        type: String
    },

    Summary: {
        type: String
    },

    VideoTree: {
        type: String
    },

    CourseTree: {
        type: String
    },
    
    ExcerciseTree: {
        type: String
    },

    Certificate: {
        type: String
    },

    ExamTree: {
        type: String
    }




    
    

}, { timestamps: true })


courseSchema.index({id:'text'})
module.exports = mongoose.model('course', courseSchema)

//courses.find()
