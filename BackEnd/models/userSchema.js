const mongoose = require('mongoose')
const bcrypt=require('bcrypt')

const Schema = mongoose.Schema


const UserSchema = new Schema({
    id: {
        type: Number,
        required: true
    },
    isCoroprate: {
        type: Boolean,
        required: true
    },
    username: {
        type: String,
        required: 'Username is required',
        unique:true

    },
    email: {
        type: String,
        required: 'Email is required',
        unique:true,
        match: [/.+\@.+\..+/, 'Please fill a valid email address']


        //had y3ml regex lel email
    },
     password: {
        type: String,
        required: true
    },
    gender: {
        type: String,

    },
    boughtCourses: {
        type: String,

    },
    country: {
        type: String,

    },
    creditCardDetails: {
        type: String,

    },

    //lesa fee ba2y
}, { timestamps: true })

UserSchema.statics.signup=async(email,username,password,isCoroprate)=>{
    const emailExists =await this.findOne({email})
    const usernameExists =await this.findOne({username})

    if (emailExists)
        throw Error('Email already in use')
    if (usernameExists)
        throw Error('Username already in use')
        
    const salt=await bcrypt.genSalt(10)
    const hash=await bcrypt.hash(password,salt)

    const user=await this.create({email,password: hash,isCoroprate})

    return user  
}





module.exports = mongoose.model('User', UserSchema)