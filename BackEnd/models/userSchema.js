// const mongoose = require('mongoose')
// //const bcrypt=require('bcrypt')
// const validator = require('validator')
// const Schema = mongoose.Schema


// const UserSchema = new Schema({
    
//     isCorporate: {
//         type: Boolean,
//         required: true
//     },
//     username: {
//         type: String,
//         required: 'Username is required',
//         unique:true

//     },
//     email: {
//         type: String,
//         required: 'Email is required',
//         unique:true,
//        // match: [/.+\@.+\..+/, 'Please fill a valid email address']

})

UserSchema
  .virtual('password')
  .set(function(password) {
    this._password = password
    this.salt = this.makeSalt()
    this.hashed_password = this.encryptPassword(password)
  })
  .get(function() {
    return this._password
  })

UserSchema.path('hashed_password').validate(function(v) {
  if (this._password && this._password.length < 6) {
    this.invalidate('password', 'Password must be at least 6 characters.')
  }
  if (this.isNew && !this._password) {
    this.invalidate('password', 'Password is required')
  }
}, null)

//     },
//     country: {
//         type: String,

//     },
//     creditCardDetails: {
//         type: String,

//     },

//     //lesa fee ba2y
// }, { timestamps: true })

// UserSchema.statics.signup=async function(email,username,password,isCorporate){
//     const emailExists =await this.findOne({email})
//     const usernameExists =await this.findOne({username})

//     if(!email || !password)
//         throw Error('All fields must be filled')
//     if (emailExists)
//         throw Error('Email already in use')
//     if (usernameExists)
//         throw Error('Username already in use')
//     if(!validator.isEmail(email))
//         throw Error('Email is not valid')
//     // if(!validator.isStrongPassword(password))
//     //     throw Error('Email is not valid')

        
//     const salt=await bcrypt.genSalt(10)
//     const hash=await bcrypt.hash(password,salt)

//     const user=await this.create({email,username,password: hash, isCorporate})

//     return user  
// }

// UserSchema.statics.login = async function(email,password) {
    
//     if(!email || !password)
//         throw Error('All fields must be filled')

//     const user = await this.findOne({ email })
//     if(!user)
//         throw Error('Incorrect email')
   

//     const match = await bcrypt.compare(password, user.password)

//     if(!match)
//         throw Error('Incorrect password')
    
//     return user

// }

export default mongoose.model('User', UserSchema)
