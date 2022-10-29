const express = require('express')
const Admin = require('../models/AdminSchema')
const { addAdmin,addUser, addInstructor} = require('../controller/adminController')

const router = express.Router()


router.post('/', addAdmin)
router.post('/instructor', addInstructor)
router.post('/user', addUser)

router.get('/', addUser)



module.exports = router