const CourseMaterial = require('../models/course/courseMaterialSchema')
const Course = require('../models/course/courseSchema')
const Issue = require('../models/lib/issueSchema')
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
const addCourseIssue = async (req, res) => {
    const {
        _id,
        course_id,
        type,
        issueString
    } = req.body

    try {
        if ( !_id || !type || !issueString )
        throw Error('All fields must be filled')

        var user = await User.findOne({
            _id
        })
        if (!user)
            throw Error('User does not Exist')
        
        var course = await Course.findOne({
            _id : course_id
        })
        if (!course)
            throw Error('Course does not Exist')
        
        const issue = await Issue.create({
            requester_id : _id,
            type : type,
            issue: issueString,
            status: 'Unseen',
        })

        const issueObj = {
            Issue_id: issue._id,
            issue : issueString, 
        }
        
        user = await User.findByIdAndUpdate({
            _id
        }, {
            $push: {
                unresolvedIssues: issueObj
            },
        })
        course = await Course.findByIdAndUpdate({
            _id : course_id
        }, {
            $push: {
                unresolvedIssues: issueObj
            },
        })

        res.status(200).json({
            issue,
        })
    } catch (error) {
        res.status(400).json({
            error: error.message
        })
    }
}
const getIssue = async (req, res) => {
    const {
        _id,
    } = req.query

    try {
        if ( !_id )
        throw Error('All fields must be filled')

        var issue = await Issue.findOne({
            _id
        })
        if (!issue)
            throw Error('Issue does not Exist')
        
        res.status(200).json({
            issue,
        })
    } catch (error) {
        res.status(400).json({
            error: error.message
        })
    }
}
const getMyIssues = async (req, res) => {
    const {
        _id,
    } = req.query

    try {
        if ( !_id )
        throw Error('All fields must be filled')

        var user = await User.findOne({
            _id
        })
        if (!user)
            throw Error('User does not Exist')

        var issues = await Issue.find({
            requester_id : _id
        })
        if (!issues)
            throw Error('User does not Have any Issues')    
        
        res.status(200).json({
            issues,
        })
    } catch (error) {
        res.status(400).json({
            error: error.message
        })
    }
}
const commentIssue = async (req, res) => {
    const {
        _id,
        issue_id,
        comment,
    } = req.body

    try {
        if ( !_id || !issue_id || !comment)
        throw Error('All fields must be filled')

        var user = await User.findOne({
            _id
        })
        if (!user)
            throw Error('User does not Exist')

        var issue = await Issue.findOne({
            _id : issue_id
        })
        if (!issue)
            throw Error('Issue does not Exist')

        const commentObj = {
            commenter_id: _id,
            comment,
        }
        issue = await Issue.findByIdAndUpdate({
            _id : issue_id
        }, {
            $push: {
                comments: commentObj
            },
        })
        
        res.status(200).json({
            issue,
        })
    } catch (error) {
        res.status(400).json({
            error: error.message
        })
    }
}



module.exports = {
    changePassword,
    addCourseIssue,
    getIssue,
    getMyIssues,
    commentIssue,

}