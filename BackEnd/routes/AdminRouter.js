const express = require('express')
const Admin = require('../models/AdminSchema')
const { signupAdmin, signupInstructor,signupUser, addI} = require('../controller/adminController')

const router = express.Router()


router.post('/', signupAdmin)
router.post('/instructor', signupInstructor)
router.post('/user', signupUser)

router.get('/', signupUser)



module.exports = router