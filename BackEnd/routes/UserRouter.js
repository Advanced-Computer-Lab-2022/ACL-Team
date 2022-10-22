const express = require('express')
const User = require('../models/userSchema')

const router = express.Router()

router.get('/', getAllUsers)
router.post('/', CreateNewUser)
router.delete('/:id' , deleteAUser)
