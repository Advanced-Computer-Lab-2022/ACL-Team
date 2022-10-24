const userDb = require('../models/userSchema')



const loginUser = async(req, res) => {

}
const signupUser = async(req, res) => {
   const {email,username,password} = req.body
   
   try {
    const user = await userDb.signupUser(email,username,password)
    res.status(200).json({email,userDb})
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