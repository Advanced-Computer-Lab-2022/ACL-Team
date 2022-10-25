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
    }

}, { timestamps: true })
AdminSchema.statics.signup = async function(username , password , gender){
    const usernameExists = await this.findOne({username})

    if(!username || !password || gender)
        throw error('All fields must be filled')
    if(usernameExists)
        throw Error('Username already in use')
    
    
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password,salt) 
    
    const admin = await this.create({username , password: hash , gender})

    return admin
}


AdminSchema.index({id:'text'})
module.exports = mongoose.model('Admin', AdminSchema)


