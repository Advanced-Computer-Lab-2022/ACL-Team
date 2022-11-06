const Course = require('../models/course/courseSchema')
const Instructor = require('../models/InstructorSchema')
const Trainee = require('../models/traineeSchema')
const User = require('../models/userSchema')
const mongoose = require('mongoose');

const {
    addCourse
} = require('../controller/Instructor/instructorCourseController');

jest.setTimeout(100000)

beforeAll(() => {

    initializeFile();

});

async function initializeFile() {
    const conn = process.env.MONGO_URI || 'mongodb+srv://mohamed4016:1234@cluster0.iblfteg.mongodb.net/test';
    mongoose.connect(conn)
        .then(() => {
            app.listen(port, () => {
                console.log('connected to db & the server is listening', port)
            })
        })
        .catch((error) => {
            console.log(error)
        })



}

describe("addCourse", () => {
    test('search for a course in db', async () => {

        const testInstructor = await Instructor.findById('6366aca99de5f423d7052454')
        const inst_id = testInstructor._id;

        const courseObject = {
            title: "Math3",
            price: 6000,
            category: "Mathematics",
            instructor_id: inst_id,
            totalHours: 20,
            subject: "Math",
            summary: "hi"
        }

        const title = "Math3"
        const price = 6000;
        const category = "Mathematics"
        const subject = "Math"
        const instructor_id = inst_id
        const totalHours = 20
        const summary = "hi"

        const course = await Course.addCourse(title, price, category, subject, instructor_id, totalHours, summary)

        const toEqualCourse = {
            title: course.title,
            price: course.price,
            category: course.category,
            subject: course.subject,
            instructor_id: course.instructor_id,
            totalHours: course.totalHours,
            summary: course.summary,
        }

        Course.deleteCourse(course._id)
        expect(toEqualCourse).toEqual(courseObject)




    })

    test('trainee signup', async () => {

        const firstname = "testUser"
        const lastname = "testUser"

        const userObject = {
            email: "testUser@gmail.com",
            username: "testUser",
            password: "1234",
            name: {
                firstname,
                lastname
            },
            gender: "alpha"
        }

        const trainee = await Trainee.signup(userObject.email, userObject.username, userObject.password, firstname, lastname, userObject.gender)

        const traineeUser = await User.findById(trainee._id)



        expect(traineeUser.email).toBe("testUser@gmail.com")
        expect(traineeUser.username).toBe("testUser")
        expect(traineeUser.gender).toBe("alpha")

        User.deleteUser(trainee._id)

    })

})