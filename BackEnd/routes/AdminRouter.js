const express = require('express')
const Admin = require('../models/adminSchema')
const { 
    addAdmin,
    addUser,
    addInstructor,
    getUnseenIssues,
    markIssueAsPending,
    markIssueAsResolved,
    getPendingIssues,
    getResolvedIssues,
    getPendingCourseRequests,
    grantCourse
} = require('../controller/adminController')

const router = express.Router()


router.post('/', addAdmin)
router.post('/instructor', addInstructor)
router.post('/user', addUser)

router.get('/', ()=>{
    
})

router.get('/unseenIssues', getUnseenIssues)
router.get('/pendingIssues', getPendingIssues)
router.get('/resolvedIssues', getResolvedIssues)

router.get('/pendingCourseRequests', getPendingCourseRequests)

router.post('/markIssueAsPending', markIssueAsPending)

router.post('/markIssueAsResolved', markIssueAsResolved)

router.post('/grantCourse', grantCourse)



module.exports = router