const CourseRequest = require("../../models/course/courseRequest")



const requestCourse = async (req, res) => {
    const {
        _id,
        course_id,
    } = req.body

    try {

        if(!_id || !course_id)
            throw Error("All fields Must be filled")
        
        const courseRequest = await CourseRequest.create({
            requester_id:_id,
            course_id,
            status : 'Pending'
        })
        res.status(200).json({
            courseRequest,
        })
    } catch (error) {
        res.status(400).json({
            error: error.message
        })
    }
}





module.exports = {
    requestCourse,

}