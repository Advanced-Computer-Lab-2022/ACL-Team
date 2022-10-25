const express = require('express')
const Admin = require('../models/AdminSchema')
const { signupAdmin, signupInstructor,CreateNewUser} = require('../controller/adminController')

const router = express.Router()

router.get('/', CreateNewUser)
router.post('/', signupAdmin)
router.get('/:id', signupInstructor)


module.exports = router