const mongoose = require('mongoose')

const Schema = mongoose.Schema

const TraineeSchema = new Schema({
    Id: {
        type: Number,
        required: true
    },

    isCorprate: {
        type: Boolean,
    },
   
    name: {
        type: String,
        // required: true
    },
    
    password: {
        type: String,
        // required: true
    },
    
    gender: {
        type: String
    },
    
    boughtCourses: {
        type: String,
        // required: true
    },

    Country: {
        type: String
    },

    CreditCardDetails: {
        type: String
    },

}, { timestamps: true })


courseSchema.index({id:'text'})
module.exports = mongoose.model('Trainee', TraineeSchema)

//courses.find()
