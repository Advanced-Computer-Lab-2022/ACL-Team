const mongoose = require('mongoose')
const bcrypt=require('bcrypt')
const validator = require('validator')
const Schema = mongoose.Schema

const InstructorSchema = new Schema({
   
    name: {
        type: String,
        //required: true
    },
    
    password: {
        type: String,
        required: true
    },
    
    gender: {
        type: String,
        required: true
    },
    
    offeredcourses: {
        type: String,
        // required: true
    },

    biography: {
        type: String
        
    },

    email: {
        type: String,
        required: true
    },
    username:{
        type: String,
        required: true
    }

}, { timestamps: true })

InstructorSchema.statics.signup= async function (name,email,username,password,gender) {
    const emailExists =await this.findOne({email})
    const usernameExists =await this.findOne({username})

    if(!email || !password || !name || !gender || !username )
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

    const instructor=await this.create({name,email,username,password: hash, gender })

    return instructor  
}

InstructorSchema.statics.login = async function(email,password) {
    
    if(!email || !password)
        throw Error('All fields must be filled')

    const instructor = await this.findOne({ email })
    if(!instructor)
        throw Error('Incorrect email')
   

    const match = await bcrypt.compare(password, instructor.password)

    if(!match)
        throw Error('Incorrect password')
    
    return instructor

}
InstructorSchema.statics.editBiography = async function( _id,biography){
    if(!biography){
        throw Error('No Biography to be updated')
    }
    const updatedBio = await this.findOneAndUpdate(_id , biography)

    return updatedBio
}


InstructorSchema.statics.editEmail = async function( _id,email){
    if(!email){
        throw Error('No email to be updated')
    }
    const updatedBio = await this.findOneAndUpdate(_id , email)

    return updatedBio
    
}


InstructorSchema.statics.emailExists = async function(email){
    return await this.findOne({email})
}
InstructorSchema.statics.usernameExists = async function(username){
    return await this.findOne({username})
}



module.exports = mongoose.model('Instructor', InstructorSchema)


