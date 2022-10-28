const express = require('express')
const Admin = require('../models/AdminSchema')
const { signupAdmin, signupInstructor,signupUser, addI} = require('../controller/adminController')

const router = express.Router()

router.get('/', signupUser)
router.post('/', signupUser)
router.get('/:id', signupInstructor)
router.post('/addI', addI)


module.exports = router