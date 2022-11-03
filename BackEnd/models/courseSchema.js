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
    total_rating: {
        type: Number,
    },
    category_id: {
        type: String, //TODO
    },
    summary: {
        type: String,
        required: true
    },
    price: {
        type: Number,
    },
    max_grade: {
        type: Number,
    },
    total_hours: {
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

//courses.find()
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
CourseSchema.statics.getCoursePrice = async function (id) {
    const courseExists = await this.findOne({
        id
    })

    if (!id || !title || !category || !instructor_id || !summary || !price)
        throw Error('All fields must be filled')
    if (!courseExists)
        throw Error('course id not found ')

    return course.price
}

CourseSchema.statics.getCourseById = async function (id) {
    const courseExists = await this.findOne({
        id
    })

    if (!id || !title || !category || !instructor_id || !summary || !price)
        throw Error('All fields must be filled')
    if (!courseExists)
        throw Error('course id not found ')

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


module.exports = mongoose.model('course', CourseSchema)