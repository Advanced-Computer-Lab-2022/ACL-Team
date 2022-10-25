const User = require('../models/userSchema')
const jwt = require('jsonwebtoken')
const { create } = require('../models/courseSchema')

const createToken =(_id) =>{
   return jwt.sign({_id}, proccess.env.secret, {expiresIn: '1d'})
}

const loginUser = async(req, res) => {
    const {email,password} = req.body

    try {
        const user = await User.login(email,password)
        
        const token = createToken(user._id)
    
        res.status(200).json({email,token})
       }
       catch(error){
        res.status(400).json({error: error.message})
       }

}

const signupUser = async(req, res) => {
   const {email,username,password,isCorporate} = req.body

   try {
    const user = await User.signupUser(email,username,password,isCorporate)
    
    const token = createToken(user._id)

    
    res.status(200).json({email,token})
   }
   catch(error){
    res.status(400).json({error: error.message})
   }
}

const signOut = async(req, res) => {

}
const signIn = async(req, res) => {
   
   
}








module.exports = {
    signOut,
    signIn,
    loginUser,
    signupUser,

   

}