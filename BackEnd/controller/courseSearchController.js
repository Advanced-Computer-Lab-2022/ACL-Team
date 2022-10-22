const courseDb = require('../models/courseSchema')
const express = require('express')
const router = express.Router
const searchController = require('./courseSearchController')
const { query } = require('express')


exports.getCourse = async(req, res) => {
    const { title, id, subject, rating, price } = req.body;

    try {
        let courses;
        switch (id) {
            case 'text':
                courses = await courseDB.find({ $text: { $search: query } })
                break;

        }
        if (!courses.lenght > 0) {
            courses = await courses.find({})
        }
        res.json({ courses });
    } catch (err) {
        console.log(err, 'search course failed');
        res.status(400).json({
            errorMessage: 'please try again'
        })

    }
}








//router.get('/:id',courseRouter.getCourse);
//get all courses available
const getCourse = async(req, res) => {
    const courses = await courseDb.find({}).sort({ createdAt: -1 })

    res.status(200).json(courses)
}








module.exports = {

    getCourse,

}