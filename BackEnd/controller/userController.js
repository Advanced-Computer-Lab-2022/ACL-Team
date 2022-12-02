const CourseMaterialSchema = require('../models/course/courseMaterialSchema')
const User = require('../models/userSchema')
const { createToken } = require('./authController')


const changePassword = async (req, res) => {
    const {
        email,
        oldPassword,
        newPassword
    } = req.body
    console.log(req.body)
    try {
        
        const user = await User.changePassword(email, oldPassword, newPassword)

        const token = createToken(user._id)

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


module.exports = {
    changePassword,
}