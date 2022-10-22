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
    
    BoughtCourses: {
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
