const express = require('express')
const courses = require('../models/courses')

const router = express.Router();

router.get('/', (req, res) => {
    res.json({ mssg: "Get all courses " })
})

router.get('/:id', (req, res) => {
    res.json({ mssg: "Get a courses " })
})

router.post('/', async(req, res) => {
    const { title, id, subject, rating, price } = req.body

    try {
        const courses = await courses.create({ title, id, subject, rating, price })
        res.status(200).json(courses)
    } catch (error) {

        res.status(400).json({ error: error.message })

    }
    // res.json({ mssg: "post a courses " })
})

router.delete('/:id', (req, res) => {
        res.json({ mssg: "delete a courses " })
    })
    //update a course
router.patch('/:id', (req, res) => {
    res.json({ mssg: "update a courses " })
})





module.exports = router