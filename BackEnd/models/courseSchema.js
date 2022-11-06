const mongoose = require('mongoose')
const Instructor = require('../models/InstructorSchema')

const Schema = mongoose.Schema


const CourseSchema = new Schema({
    instructor_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Instructor',
        required: true

    },
    title: {
        type: String,
        required: 'title is required',

    },
    total_rating: [{
        rating: Number,
    }],

    category: { //SHOULD BE AN ID TO CATEGORY TODO
        type: String, //TODO
    },
    summary: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    price: {
        type: Number,
    },
    maxGrade: {
        type: Number,
    },
    totalHours: {
        type: Number,
    },
    total_points: {
        type: Number,
    },
    awards: [{
        award_id: String, //TODO
    }]




}, {
    timestamps: true
})

CourseSchema.statics.addCourse = async function (title, price, category, subject, instructor_id, totalHours, summary) {

    if (!title || !price || !category || !subject || !instructor_id || !totalHours)
        throw error('All fields must be filled')

    const course = await this.create({
        title,
        price,
        category,
        subject,
        instructor_id,
        totalHours,
        summary
    })

    // Add the course to the instructor
    await Instructor.findByIdAndUpdate({
            _id: instructor_id
        }, {
            $push: {
                offered_courses: course._id
            },
        }

    )

    return course

}
CourseSchema.statics.getCourseByTitle = async function (searchTitle) {
    if (!searchTitle)
        throw Error('No Search Written')
    const courses = await this.find().sort({
        createdAt: -1
    })
    const options = {
        includeScore: true,
        keys: ['title']
    }
    const fuse = new Fuse(courses, options)
    const result = fuse.search(searchTitle)
    return result
}
CourseSchema.statics.getCourseByInstructor = async function (searchInstructor) {
    if (!searchInstructor)
        throw Error('No Search Written')
    const courses = await this.find().sort({
        createdAt: -1
    })
    const options = {
        includeScore: true,
        keys: ['instructor_id']
    }
    const fuse = new Fuse(courses, options)
    const result = fuse.search(searchInstructor)
    return result
}
CourseSchema.statics.getCourseBySubject = async function (searchSubject) {
    if (!searchSubject)
        throw Error('No Search Written')
    const courses = await this.find().sort({
        createdAt: -1
    })
    const options = {
        includeScore: true,
        keys: ['subject']
    }
    const fuse = new Fuse(courses, options)
    const result = fuse.search(searchSubject)
    return result
}
CourseSchema.statics.search = async function (search) {
    if (!search)
        throw Error('No Search Written')
    const courses = await this.find().sort({
        createdAt: -1
    })
    const options = {
        includeScore: true,
        keys: ['subject', 'title']
    }
    const fuse = new Fuse(courses, options)
    const result = fuse.search(search)
    return result

}

CourseSchema.statics.rateCourse = async function (course_id, rating) {
    const course = await this.findByIdAndUpdate({
            _id: course_id
        }, {
            $push: {
                total_rating: rating
            },
        }

    )
}

CourseSchema.statics.deleteCourse = async function (course_id) {
    await this.deleteOne({
        _id: course_id
    })
}


module.exports = mongoose.model('course', CourseSchema)