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
    summary: {
        type: String,
        required: 'summary is required'
    },
    category: {
        type: String,
        enum: ['Web Development', 'Intermediate', 'Mathematics', 'Web Design'],
        required: 'category is required'
    },
    price: {// all prices here are in egp and should be converted first
        type: Number,
        required: 'price is required',
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
    isFree: {
        type: Boolean,
        required: true,
    },
    isDiscounted: {
        type: Boolean,
    },
    discount_id: {
        type: mongoose.Schema.Types.ObjectId,
    },
    subscriberNumber: {
        type: Number,
    },
    reviewNumber: {
        type: Number,
    },
    lectureNumber: {
        type: Number,
    },
    level: {
        type: String,
        enum: ['Begginer', 'Intermediate', 'Expert', 'All Levels'],
        default: 'All Levels',
        required: true
    },


}, {
    timestamps: true
})

CourseSchema.statics.addCourse = async function (title, price, category, instructor_id, summary,coursePreviewUrl) {

    if (!title || !price || !category || !instructor_id || !summary || !coursePreviewUrl)
        throw error('All fields must be filled')

    const instructor = await Instructor.findOne({
        _id: instructor_id
    })
    if (!instructor)
        throw Error('Instructor does not Exist')
   
        const isFree = false;
    
        if(price == 0)
            isFree = true
    
    const course = await this.create({
        title,
        price,
        category,
        instructor_id,
        summary,
        coursePreviewUrl,
        isFree,
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
CourseSchema.statics.getCourseBycategory = async function (searchcategory) {
    if (!searchcategory)
        throw Error('No Search Written')
    const courses = await this.find().sort({
        createdAt: -1
    })
    const options = {
        includeScore: true,
        keys: ['category']
    }
    const fuse = new Fuse(courses, options)
    const result = fuse.search(searchcategory)
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
        keys: ['category', 'title']
    }
    const fuse = new Fuse(courses, options)
    const result = fuse.search(search)
    return result

}
CourseSchema.statics.rateCourse = async function (user_id,course_id, rating) {

    if (!course_id || !rating)
        throw Error('All fields must be filled')

    const courseExist = await this.findOne({
        course_id
    })

    if (!courseExist)
        throw Error('Course Does not Exist')

    const ratingObject = {
        rating:rating,
        user_id:user_id
    }

    const course = await this.findByIdAndUpdate({
            _id: course_id
        }, {
            $push: {
                allRatings: ratingObject
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

    if (!course)
        throw Error('Course Does not Exist')
    if (!discount)
        throw Error('Discount Does not Exist')

    return await this.findByIdAndUpdate({
        _id: course_id
    }, {
        discount_id,
        price: course.price - (course.price / (discount.percentage / 100))
    })

}
module.exports = mongoose.model('Course', CourseSchema)