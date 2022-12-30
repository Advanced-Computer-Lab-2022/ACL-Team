const Instructor = require('../../models/InstructorSchema')
const Course = require('../../models/course/courseSchema')
const Trainee = require('../../models/traineeSchema')
const CourseSectionProgress = require('../../models/course/courseProgress/courseSectionProgress')

const getTraineebyId = async (req, res) => {
    const _id = req.query

    const trainee = await Trainee.findById(_id)

    if (!trainee) {
        return res.status(404).json({
            error: 'user not found'
        })
    }

    return res.status(200).json(trainee)
}

const joinCourse = async (req, res) => {
    const {
        _id,
        course_id,
    } = req.body

    try {
        const trainee = await Trainee.joinCourse(_id,course_id)
        res.status(200).json({
            trainee,
        })
    } catch (error) {
        res.status(400).json({
            error: error.message
        })
    }
}
const rateCourse = async (req, res) => {
    const {
        user_id,
        course_id,
        rating
    } = req.body

    try {
        if(!user_id)
            throw Error('userID not Entered')
        const course = await Course.rateCourse(user_id,course_id, rating)

        res.status(200).json({
            course,
        })
    } catch (error) {
        res.status(400).json({
            error: error.message
        })
    }
}

const reviewInstructor = async (req, res) => {
    const {
        _id,
        instructor_id,
        type,
        reviewString
    } = req.body

    try {
        const review = await Trainee.reviewInstructor(_id,instructor_id, type, reviewString)

        res.status(200).json({
            review,
        })
    } catch (error) {
        res.status(400).json({
            error: error.message
        })
    }
}
const getPreview = async (req,res) => {
    const {courseId} = req.body
    
    try{
        const previewURl = await Course.find({_id:courseId}).select({coursePreviewUrl:1 , _id:0})
        res.status(200).json({
            previewURl
        })
    }catch(error){
        console.log(error)
        res.status(400).json({
            error: error.message
        })
    }
}
const requestRefund = async (req,res) => {
    const {
        _id,
        course_id
    } = req.body
    
    try{
        if(!_id)
            throw Error('userId not Entered')
        if(!course_id)
            throw Error('courseId not Entered')

        const course = await Course.findOne({
            _id: course_id
        })
        var trainee = await Trainee.findOne({
            _id
        })
        const sectionProgress = await CourseSectionProgress.findOne({
            user_id:_id,
            course_id:course_id
        })
        if (!course)
            throw Error('Course Does not Exist')
        if (!trainee)
            throw Error('Trainee Does not Exist')
        if (!sectionProgress)
            throw Error('Section Progress Does not Exist')    
        const percentage = sectionProgress.finishedPercentage;

        var ownedCourses = trainee.ownedCourses

        for (let i = 0; i < ownedCourses.length; i++) {
                console.log(ownedCourses[i].course_id)
                if(ownedCourses[i].course_id == course_id)
                {
                    ownedCourses.splice(i, 1);
                    
                }
          }
        trainee = await Trainee.findByIdAndUpdate({
            _id
        },{
            ownedCourses
        })

        await CourseSectionProgress.deleteOne({
            user_id:_id,
            course_id:course_id
        })

        if(percentage < 50) 
        {
            res.status(200).json({
                ownedCourses
            })
        }
        else{
            res.status(200).json({
                message: "Sorry you can't refund this course you Exceeded 50% of the materials"
            })
        }



    }catch(error){
        console.log(error)
        res.status(400).json({
            error: error.message
        })
    }
}

module.exports = {
    joinCourse,
    rateCourse,
    reviewInstructor,
    getTraineebyId,
    getPreview,
    requestRefund,

}