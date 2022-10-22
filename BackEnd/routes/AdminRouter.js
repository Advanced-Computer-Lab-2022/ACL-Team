const express = require('express')
const Admin = require('../models/AdminSchema')
const {getAdmin , } = require('../controller/AdminController')

const router = express.Router()

router.get('/', getAllUsers)
router.post('/', CreateNewUser)
router.get('/:id' , getAdmin)

module.exports = router