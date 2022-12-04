const Admin = require('../models/adminSchema')
const Instructor = require('../models/InstructorSchema')
const User = require('../models/userSchema')
const jwt = require('jsonwebtoken')
const Issue = require('../models/lib/issueSchema')
const CourseRequest = require('../models/course/courseRequest')
const Trainee = require('../models/traineeSchema')

const createToken = (_id) => {
    return jwt.sign({
        _id
    }, "verygoodsecret", {
        expiresIn: '1d'
    })
}
const addAdmin = async (req, res) => {
    const {
        username,
        password,
        gender,
        email,
        name
    } = req.body

    try {
        const admin = await Admin.signup(username, password, gender, email, name)
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
const addInstructor = async (req, res) => {
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
            instructor,
            token
        })
    } catch (error) {
        res.status(400).json({
            error: error.message
        })
    }
}
const addUser = async (req, res) => {
    const {
        email,
        username,
        password,
        isCorporate
    } = req.body

    try {
        const user = await User.signup(email, username, password, isCorporate)

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
const getUnseenIssues = async (req, res) => {
    try {
        const issues = await Issue.find({
            status: 'Unseen'
            })

        if(!issues)
            throw Error('No unseen Issues Exist')

        res.status(200).json({
            issues
        })
    } catch (error) {
        res.status(400).json({
            error: error.message
        })
    }
}
const getPendingIssues = async (req, res) => {
    try {
        const issues = await Issue.find({
            status: 'Pending'
            })

        if(!issues)
            throw Error('No unseen Issues Exist')

        res.status(200).json({
            issues
        })
    } catch (error) {
        res.status(400).json({
            error: error.message
        })
    }
}
const getResolvedIssues = async (req, res) => {
    try {
        const issues = await Issue.find({
            status: 'Resolved'
            })

        if(!issues)
            throw Error('No unseen Issues Exist')

        res.status(200).json({
            issues
        })
    } catch (error) {
        res.status(400).json({
            error: error.message
        })
    }
}
const markIssueAsPending = async (req, res) => {
    const {
        _id,
        issue_id,
        comment
    } = req.body

    try {
        var issue = await Issue.findOne({
            _id: issue_id
            })
        if(!issue)
            throw Error('This Issue Does Not Exist')

        issue = await Issue.findByIdAndUpdate({
            _id : issue_id
        }, {
            resolver_id : _id,
            resolverComment : comment,
            status:'Pending'
        })

        res.status(200).json({
            issue
        })
    } catch (error) {
        res.status(400).json({
            error: error.message
        })
    }
}
const markIssueAsResolved = async (req, res) => {
    const {
        _id,
    } = req.body

    try {

        var issue = await Issue.findOne({
            _id
            })
        if(!issue)
            throw Error('This Issue Does Not Exist')

        issue = await Issue.findByIdAndUpdate({
            _id
        }, {
            status: 'Resolved'
        })

        res.status(200).json({
            issue
        })
    } catch (error) {
        res.status(400).json({
            error: error.message
        })
    }
}
const getPendingCourseRequests = async (req, res) => {
    try {
        const requests = await CourseRequest.find({
            status: 'Pending'
            })

        if(!requests)
            throw Error('No unseen Issues Exist')

        res.status(200).json({
            requests
        })
    } catch (error) {
        res.status(400).json({
            error: error.message
        })
    }
}
const grantCourse = async (req, res) => {
    const {
        courseRequest_id,
    } = req.body

    try {
        var request = await CourseRequest.findOne({
            _id:courseRequest_id
            })
        if(!request)
            throw Error('No unseen Issues Exist')

        await Trainee.joinCourse(request.requester_id,request.course_id)


        request = await CourseRequest.findByIdAndUpdate({
            _id:courseRequest_id
        }, {
            status: 'Granted'
        })

        res.status(200).json({
            request
        })
    } catch (error) {
        res.status(400).json({
            error: error.message
        })
    }
}
// add admin
//add user
// add instructor +++++ search bta3hom
// add course
// edit user fields 

module.exports = {
    addAdmin,
    addInstructor,
    addUser,
    getUnseenIssues,
    getPendingIssues,
    getResolvedIssues,
    markIssueAsPending,
    markIssueAsResolved,
    getPendingCourseRequests,
    grantCourse,
}