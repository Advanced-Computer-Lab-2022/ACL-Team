const User = require('../models/UserSchema')
const Instructor = require('../models/InstructorSchema')
const Admin = require('../models/AdminSchema')
const jwt = require('jsonwebtoken')


const loginUser = async (req, res) => {
    try {
        const user = await User.login(email, password)

        const token = createToken(user._id)
        console.log(token)

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
const loginAdmin = async (req, res) => {
    try {
        const admin = await Admin.login(admin, password)

        const token = createToken(admin._id)

        res.status(200).json({
            admin,
            token
        })
    } catch (error) {
        res.status(400).json({
            error: error.message
        })
    }
}
const loginInstructor = async (req, res) => {
    try {
        const instructor = await Instructor.login(email, password)

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
const validateToken = async (_id, res) => {
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
const signupUser = async (req, res) => {
    const {
        email,
        username,
        password,
        isCorporate,
        firstname,
        lastname,
        gender
    } = req.query

    try {

        const user = await User.signup(email, username, password, isCorporate, firstname, lastname, gender)

        const id = user._id.toHexString()
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
        name,
        email,
        username,
        password,
        gender
    } = req.body

    try {
        const instructor = await Instructor.signup(name, email, username, password, gender)

        const token = createToken(instructor._id)


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

const signupAdmin = async (req, res) => {
    const {
        name,
        email,
        username,
        password,
        gender
    } = req.body

    try {
        const admin = await Admin.signup(name, email, username, password, gender)

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

const signOut = async (req, res) => {

}
const signIn = async (req, res) => {


}








module.exports = {
    signOut,
    signIn,
    loginUser,
    loginAdmin,
    loginInstructor,
    signupUser,
    signupInstructor,
    createToken,
    validateToken



}