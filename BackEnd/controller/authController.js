const User = require('../models/UserSchema')
const Trainee = require('../models/traineeSchema')
const Instructor = require('../models/InstructorSchema')
const Admin = require('../models/adminSchema')
const jwt = require('jsonwebtoken')

// ONE LOGIN FOR ALL USERS BUT THREE SIGNUPS
const loginUser = async (req, res) => {
    const {
        email,
        password
    } = req.body

    try {
        const user = await User.login(email, password)

        const token = createToken(user._id)
        const role = user.role

        res.status(200).json({
            user,
            token,
            role
        })
    } catch (error) {
        res.status(400).json({
            error: error.message
        })
    }
}
//SHOULD BE CALLED AFTER CALLING FORGET PASSWORD AND SHOULD WORK FOR ALL USERS
const changePassword = async (req, res) => {
    const {
        _id,
        email,
        oldPassword,
        newPassword
    } = req.body

    try {
        const user = await User.changePassword(email, oldPassword, newPassword);

        res.status(200).json({
            user,
            token
        })
    } catch (error) {
        res.status(400).json({
            error: error.message
        })
    }


}
// ONLY TO BE CALLED AFTER VALIDATING ID AND PASSWORD IT ASSUMES THAT THEY ARE RIGHT
function createToken(req) {
    let jwtSecretKey = process.env.secret || "secret";
    let data = {
        "id": req.id,

    }

    const token = jwt.sign(data, jwtSecretKey, {
        expiresIn: '1d'
    });
    console.log(token)
    return token

    //TODO#
}
const validateToken = async (req, res) => {
    // Tokens are generally passed in the header of the request
    // Due to security reasons.

    let tokenHeaderKey = process.env.TOKEN_HEADER_KEY || "secretToken";
    let jwtSecretKey = process.env.JWT_SECRET_KEY || "secret";

    try {
        const token = req.header(tokenHeaderKey);

        const verified = jwt.verify(token, jwtSecretKey);
        if (verified) {
            return res.status(200).send("Successfully Verified");
        } else {
            // Access Denied
            return res.status(401).send(error);
        }
    } catch (error) {
        // Access Denied
        return res.status(401).send(error);
    }
};
const signupTrainee = async (req, res) => {
    const {
        email,
        username,
        password,
        firstname,
        lastname,
        gender
    } = req.body

    try {

        const trainee = await Trainee.signup(email, username, password, firstname, lastname, gender)

        const id = trainee.user_id
        
        const token = createToken({
            id
        })


        res.status(200).json({
            email,
            token
        })
    } catch (error) {
        res.status(400).json({
            error: error.message
        })
    }
}
const signupInstructor = async (req, res) => {
    const {
        email,
        username,
        password,
        firstname,
        lastname,
        gender
    } = req.body

    console.log(req.body)
    try {
        const instructor = await Instructor.signup(email, username, password, firstname, lastname, gender)

        const token = createToken(instructor._id)


        res.status(200).json({
            instructor,
            token
        })
    } catch (error) {
        res.status(400).json({
            error: error.message
        })
    }
}
const signupAdmin = async (req, res) => {
    const {
        email,
        username,
        password,
        firstname,
        lastname,
        gender
    } = req.body

    try {
        const admin = await Admin.signup(email, username, password, firstname, lastname, gender)

        const token = createToken(admin._id)


        res.status(200).json({
            email,
            token
        })
    } catch (error) {
        res.status(400).json({
            error: error.message
        })
    }
}

const forgetPassword = async (req,res) => {
    const {email} = req.body
    
    try {
        const user = await User.findOne({email})
        
        if(!user){
            return res.json({status:"User does not exist"})
        }
        const secret = process.env.secret || "secret" + user.password
        const token = jwt.sign({email: user.email , id: user._id } , secret , {expiresIn: "5m"})
        const link = `http://localhost:3000/resetPassword/${user._id}/${token}`
        console.log(link)

    } catch (error) {
        
    }
}

const resetPassword = async (req,res) => {
    const {id , token} = req.params

    console.log(req.params)
    res.send("done")
}
module.exports = {
    loginUser,
    signupTrainee,
    signupInstructor,
    signupAdmin,
    createToken,
    validateToken,
    forgetPassword,
    resetPassword

}