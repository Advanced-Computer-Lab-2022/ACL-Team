const mongoose = require('mongoose')
const bcrypt=require('bcrypt')
const validator = require('validator')
const Schema = mongoose.Schema

const TraineeSchema = new Schema({
    
    _id: {
        type: mongoose.Schema.Types.ObjectId,
         ref: 'User',
         required: true

    },
    isCorporate: {
        type: boolean ,
         required: true

    },
    credticard_details: {
        type: String ,

    },
    owned_courses: [{
        course_id:String, //TODO
        }
    ],
    followed_courses: [{
        course_id:String, //TODO
        }
    ],
    total_points: {
        type: number ,

    },
        
  

    //lesa fee ba2y
}, { timestamps: true , collection: "trainee" })
   


module.exports = mongoose.models.User ||mongoose.model('trainee', TraineeSchema)