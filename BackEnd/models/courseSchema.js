const mongoose = require('mongoose')

const Schema = mongoose.Schema

const CourseSchema = new Schema({
    id: {
        type: String,
        required: true
    },

    title: {
        type: String,
        required: true
    },
   
    price: {
        type: Number,
        required: true
    },
    
    ratings: {
        type: Number,
        // required: true
    },
    
    category: {
        type: String,
        required: true
    },
    
    subject: {
        type: String,
        // required: true
    },

    instructor_id: {
        type: String,
        required: true
        
    },

    summary: {
        type: String,
        required: true
    },

    videoTree: {
        type: String
    },

    courseTree: {
        type: String
    },
    
    excerciseTree: {
        type: String
    },

    certificate: {
        type: String
    },

    examTree: {
        type: String
    }


}, { timestamps: true })


CourseSchema.index({id:'text'})
module.exports = mongoose.model('course', CourseSchema)

//courses.find()
CourseSchema.statics.createCourse=async function(id,title,category,instructor_id,summary,price){
    const titleExists =await this.findOne({title})

    if(!id || !title || !category || !instructor_id || !summary || !price )
        throw Error('All fields must be filled')
    if (titleExists)
        throw Error('Title is already in use')
    console.log(title)
     const course=await this.create({id,title,category,instructor_id,summary,price})

    return course  
}

CourseSchema.statics.getCourseById=async function(id){
    const courseExists =await this.findOne({id})

    if(!id || !title || !category || !instructor_id || !summary || !price )
        throw Error('All fields must be filled')
    if (!courseExists)
        throw Error('course id not found ')

    return course  
}
CourseSchema.statics.getCourseByTitle=async function(id){
    const courseExists =await this.findOne({title})

    if(!id || !title || !category || !instructor_id || !summary || !price )
        throw Error('All fields must be filled')
    if (!courseExists)
        throw Error('course title not found ')

    return course  
}
CourseSchema.statics.getCourseBySubject=async function(id){
    const courseExists =await this.findOne({subject})

    if(!id || !title || !category || !instructor_id || !summary || !price )
        throw Error('All fields must be filled')
    if (!courseExists)
        throw Error('course not found ')

    return course  
}
CourseSchema.statics.getCourseByRating=async function(id){
    const courseExists =await this.findOne({ratings})

    if(!id || !title || !category || !instructor_id || !summary || !price )
        throw Error('All fields must be filled')
    if (!courseExists)
        throw Error('course not found ')

    return course  
}
CourseSchema.statics.getCourseByPrice=async function(id){
    const courseExists =await this.findOne({price})

    if(!id || !title || !category || !instructor_id || !summary || !price )
        throw Error('All fields must be filled')
    if (!courseExists)
        throw Error('course not found ')

    return course  
}
CourseSchema.statics.deleteCourseById=async function(id){
    const courseExists =await this.findOne({id})
    const idExists =await this.findOne({id})
    
    if(!id || !title || !category || !instructor_id || !summary || !price )
        throw Error('All fields must be filled')
    if (!courseExists)
        throw Error('error happened while deleting ')
    if (!idExists)
        throw Error('id not found')
        
     await this.deleteById(id);
    return course  
}
CourseSchema.statics.deleteCourseByTitle=async function(id){
    const courseExists =await this.findOne({title})
    const titleExists =await this.findOne({title})
    
    if(!id || !title || !category || !instructor_id || !summary || !price )
        throw Error('All fields must be filled')
    if (!courseExists)
        throw Error('error happened while deleting ')
    if (!titleExists)
        throw Error('course title not found')
    
    await this.deleteById(title);
    return course  
}




