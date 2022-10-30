const mongoose = require('mongoose')

const Schema = mongoose.Schema


const CourseSchema = new Schema({

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
        
    },
    
    category: {
        type: String,
        required: true
    },
    
    subject: {
        type: String,
        required: true
    },

    instructor_id: {
        //type: mongoose.Schema.Types.ObjectId, ref: 'InstructorSchema',
        type: String,
        required: true
        
    },
    totalHours: { 
        type:Number,
        required:true

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



//courses.find()
CourseSchema.statics.addCourse = async function(title , price , category , subject , instructor_id , totalHours , summary){
    const titleExists = await this.findOne({title})
    if(!title || !price || !category || !subject || !instructor_id || !totalHours)
        throw error ('all fields must be filled')
    if(titleExists)
        throw error('title already in use')
    const course = await this.create({title , price , category , subject , instructor_id , totalHours , summary})
    return course    
        
}
CourseSchema.statics.getCoursePrice = async function(id){
    const courseExists =await this.findOne({id})

    if(!id || !title || !category || !instructor_id || !summary || !price )
        throw Error('All fields must be filled')
    if (!courseExists)
        throw Error('course id not found ')

    return course.price  
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
CourseSchema.statics.getCoursesBySubject=async function(subjectName){
    
    if(!subjectName)
        throw Error('No filter added')
    const courses =await this.find({subject: subjectName })
    

    return courses

    
}
CourseSchema.statics.getCoursesByRating=async function(filteredRating){
    if(!filteredRating)
        throw Error('No filter added')
    const courses =await this.find({rating: filteredRating })
    

    return courses
      
}
CourseSchema.statics.getCoursesByRatingFromLowToHigh = async function(){
    const courses = await this.find().sort({rating : 'ascending'})
    return courses
}
CourseSchema.statics.getCoursesByRatingFromHighToLow = async function(){
    const courses = await this.find().sort({rating : 'descending'})
    return courses
}
CourseSchema.statics.getCoursesByPrice= async function(filteredPrice){
    if(!filteredPrice)
        throw Error('No filter added')
    const courses =await this.find({price: filteredPrice })
    

    return courses
}
CourseSchema.statics.getCoursesByPriceFromLowToHigh = async function(){
    const courses = await this.find().sort({price:'ascending'})
    return courses
}
CourseSchema.statics.getCoursesByPriceFromHighToLow = async function(){
    const courses = await this.find().sort({price:'descending'})
    return courses
}

CourseSchema.statics.deleteCourseById=async function(id){
    
    
}
CourseSchema.statics.deleteCourseByTitle=async function(id){
   
}

module.exports = mongoose.model('course' , CourseSchema)




