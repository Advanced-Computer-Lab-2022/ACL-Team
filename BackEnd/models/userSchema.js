const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    id: {
        type: Number,
        required: true
    },
    
    username: {
        type: String,
        required: true
    },
    
    password: {
        type: String,
        required: true
    },
   //lesa fee ba2y
}, { timestamps: true })




module.exports = mongoose.model('User', UserSchema)