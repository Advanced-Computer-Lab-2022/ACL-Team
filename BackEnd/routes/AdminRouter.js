const express = require('express')
const Admin = require('../models/AdminSchema')
const { signupAdmin, signupInstructor,signupUser} = require('../controller/adminController')

const router = express.Router()

router.get('/', signupUser)
router.post('/', signupUser)
router.get('/:id', signupInstructor)


module.exports = router