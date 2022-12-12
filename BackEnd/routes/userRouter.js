const express = require('express')
const { 
    addCourseIssue,
    getMyIssues,
    commentIssue,

    } = require('../controller/userController')



const router = express.Router()



router.post('/addCourseIssue', addCourseIssue)

router.post('/commentIssue', commentIssue)

router.get('/myIssues', getMyIssues)






module.exports = router