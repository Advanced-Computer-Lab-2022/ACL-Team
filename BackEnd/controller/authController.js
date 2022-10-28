const User = require('../models/UserSchema')
const Instructor = require('../models/InstructorSchema')
const Admin = require('../models/AdminSchema')
const jwt = require('jsonwebtoken')

const createToken =(_id) =>{
   return jwt.sign({_id}, "verygoodsecret", {expiresIn: '1d'})
}

const loginUser = async(req, res) => {
    const {email,password} = req.body

    const userEmailExists = User.emailExists(email);
    const instructorEmailExists = Instructor.emailExists(email);
    const adminEmailExists = Instructor.emailExists(email);

    if((userEmailExists && instructorEmailExists)||(userEmailExists && adminEmailExists) ||(instructorEmailExists && adminEmailExists))
        throw Error("message: E-mail tried to login but it is duplicated in databases")
    
        
    if(userEmailExists)
    {
        await userLogin()

    }
    if(instructorEmailExists)
    {
        await instructorLogin()
    }
    if(adminEmailExists)
    {
        await adminLogin()
    }

    //Implementations of called functions above

    async function userLogin() {
        try {
            const user = await User.login(email, password)

            const token = createToken(user._id)

            res.status(200).json({ email, token })
        }
        catch (error) {
            res.status(400).json({ error: error.message })
        }
    }

    async function instructorLogin() {
        try {
            const instructor = await User.login(email, password)

            const token = createToken(instructor._id)

            res.status(200).json({ email, token })
        }
        catch (error) {
            res.status(400).json({ error: error.message })
        }
    }

    async function adminLogin() {
        try {
            const admin = await User.login(admin, password)

            const token = createToken(admin._id)

            res.status(200).json({ email, token })
        }
        catch (error) {
            res.status(400).json({ error: error.message })
        }
    }
}
//TODO#
const signup = async(req,res) => {
    const {email,password} = req.body

    const userEmailExists = User.emailExists(email);
    const instructorEmailExists = Instructor.emailExists(email);
    const adminEmailExists = Instructor.emailExists(email);

    if((userEmailExists && instructorEmailExists)||(userEmailExists && adminEmailExists) ||(instructorEmailExists && adminEmailExists))
        throw Error("message: E-mail tried to login but it is duplicated in databases")
    
   
    //TODO#
}

const signupUser = async(req, res) => {
   const {email,username,password,isCorporate} = req.body

   try {
    const user = await User.signup(email,username,password,isCorporate)
    
    const token = createToken(user._id)

    
    res.status(200).json({email,token})
   }
   catch(error){
    res.status(400).json({error: error.message})
   }
}

const signupInstructor = async(req, res) => {
    const {name,email,username,password,gender} = req.body
 
    try {
     const instructor = await Instructor.signup(name,email,username,password,gender)
     
     const token = createToken(instructor._id)
 
     
     res.status(200).json({email,token})
    }
    catch(error){
     res.status(400).json({error: error.message})
    }
 }

 const signupAdmin = async(req, res) => {
    const{name,email,username,password,gender} = req.body
 
    try {
     const admin = await Admin.signup(name,email,username,password,gender)
     
     const token = createToken(admin._id)
 
     
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
    signupInstructor,

   

}