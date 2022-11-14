const mongoose = require('mongoose')
const Instructor = require('../InstructorSchema')
const Discount = require('../lib/payment/discountSchema')

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
    allRatings: [{
        rating: Number,
        user_id: mongoose.Schema.Types.ObjectId
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
    totalPoints: {
        type: Number,
    },
    awards: [{
        award_id: String, //TODO
    }],
    coursePreviewUrl: {
        type: String,
    },
    isDiscounted: {
        type: Boolean,
    },
    discount_id: {
        type: mongoose.Schema.Types.ObjectId,
    },

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

    if (!course_id || !rating)
        throw Error('All fields must be filled')

    const courseExist = await this.findOne({
        course_id
    })

    if (!courseExist)
        throw Error('Course Does not Exist')

    const course = await this.findByIdAndUpdate({
            _id: course_id
        }, {
            $push: {
                allRatings: rating
            },
        }

    )
    return course;
}
CourseSchema.statics.deleteCourse = async function (course_id) {
    if (!course_id)
        throw error('All fields must be filled')

    await this.deleteOne({
        _id: course_id
    })
}
CourseSchema.statics.setCoursePreview = async function (course_id, previewUrl) {

    if (!course_id || !previewUrl)
        throw error('All fields must be filled')

    const course = await this.findByIdAndUpdate({
            _id: course_id
        }, {
            coursePreviewUrl: previewUrl

        }

    )
}
CourseSchema.statics.applyDiscount = async function (course_id, discount_id) {

    if (!course_id || !discount_id)
        throw error('All fields must be filled')

    const course = await this.find({
        _id: course_id
    })
    const discount = await Discount.find({
        _id: discount_id
    })

    return await this.findByIdAndUpdate({
        _id: course_id
    }, {
        discount_id,
        price: course.price - (course.price / (discount.percentage / 100))
    })

}
module.exports = mongoose.model('course', CourseSchema)