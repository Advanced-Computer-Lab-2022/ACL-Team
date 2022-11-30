const CourseMaterialSchema = require('../models/course/courseMaterialSchema')
const User = require('../models/userSchema')
const { createToken } = require('./authController')


const changePassword = async (req, res) => {
    const {
        email,
        oldPassword,
        newPassword
    } = req.body

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
const getMaterial = async (req, res) => {
    const {
        material_id,
    } = req.query
    
    try {
        
        const material = await CourseMaterialSchema.findOne({
            _id:material_id
        })

        res.status(200).json({
            material
        })
    } catch (error) {
        res.status(400).json({
            error: error.message
        })
    }
}

module.exports = {
    changePassword,
    getMaterial,
}