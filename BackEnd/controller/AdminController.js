const Admin = require('../models/AdminSchema')
const Instructor = require('../models/InstructorSchema')
const jwt = require('jsonwebtoken')

const createtoken = (_id) => {
    return jwt.sign({_id}, process.env.secret, {expiresIn: '1d'})
}

const signupAdmin = async(req,res) => {
    const {username , password , gender} = req.body

    try{
        const admin = await Admin.signup(username , password, gender)
        const token = createtoken(admin._id)
        res.status(200).json({email,token})
    }
    catch(error){
        res.status(400).json({error: error.message})
    }
}

const signupInstructor = async(req,res) => {
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

const CreateNewUser = async(req,res) => {
    
}



// add admin
//add user
// add instructor +++++ search bta3hom
// add course
// edit user fields 




module.exports = {
    signupAdmin,
    signupInstructor,
    CreateNewUser

}