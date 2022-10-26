const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const Schema = mongoose.Schema

const AdminSchema = new Schema({
   
    username: {
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
    email: {
        type: String
    },
    name: {
        type: String
    }

}, { timestamps: true })
AdminSchema.statics.signup = async function(name,email,username,password,gender){
    const usernameExists = await this.findOne({username})

    if(!username || !password)
        throw error('All fields must be filled')
    if(usernameExists)
        throw Error('Username already in use')
    
    
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password,salt) 
    
    const admin = await this.create({username , password: hash })

    return admin
}

AdminSchema.statics.login = async function(email, password){
     
    if(!email || !password)
        throw Error('All fields must be filled')

    const admin = await this.findOne({ email })
    if(!admin)
        throw Error('Incorrect email')
   

    const match = await bcrypt.compare(password, admin.password)

    if(!match)
        throw Error('Incorrect password')
    
    return admin
}

AdminSchema.statics.emailExists = async function(email){
    return await this.findOne({email})
}
AdminSchema.statics.usernameExists = async function(username){
    return await this.findOne({email})
}

AdminSchema.index({id:'text'})
module.exports = mongoose.model('Admin', AdminSchema)


