const express = require('express')
const { getMaterial } = require('../controller/userController')




const router = express.Router()


router.get('/getCourseMaterial', getMaterial)

module.exports = router