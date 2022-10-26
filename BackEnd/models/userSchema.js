const mongoose = require('mongoose')
const bcrypt=require('bcrypt')
const validator = require('validator')
const Schema = mongoose.Schema


const UserSchema = new Schema({
    
    isCorporate: {
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

UserSchema.statics.signup=async function(email,username,password,isCorporate){
    const emailExists =await this.findOne({email})
    const usernameExists =await this.findOne({username})

    if(!email || !password)
        throw Error('All fields must be filled')
    if (emailExists)
        throw Error('Email already in use')
    if (usernameExists)
        throw Error('Username already in use')
    if(!validator.isEmail(email))
        throw Error('Email is not valid')
    // if(!validator.isStrongPassword(password))
    //     throw Error('Email is not valid')

        
    const salt=await bcrypt.genSalt(10)
    const hash=await bcrypt.hash(password,salt)

    const user=await this.create({email,username,password: hash, isCorporate})

    return user  
}

UserSchema.statics.login = async function(email,password) {
    
    if(!email || !password)
        throw Error('All fields must be filled')

    const user = await this.findOne({ email })
    if(!user)
        throw Error('Incorrect email')
   

    const match = await bcrypt.compare(password, user.password)

    if(!match)
        throw Error('Incorrect password')
    
    return user

}
UserSchema.statics.emailExists = async function(email){
    return await this.findOne({email})
}
UserSchema.statics.usernameExists = async function(username){
    return await this.findOne({username})
}







module.exports = mongoose.model('User', UserSchema)