const Instructor = require("../../models/InstructorSchema");
const Course = require("../../models/course/courseSchema");
const Trainee = require("../../models/traineeSchema");
const CourseSectionProgress = require("../../models/course/courseProgress/courseSectionProgress");
const Payment = require("../../models/lib/payment/paymentSchema");

const getTraineebyId = async (req, res) => {
  const _id = req.query;

  const trainee = await Trainee.findById(_id);

  if (!trainee) {
    return res.status(404).json({
      error: "user not found",
    });
  }

  return res.status(200).json(trainee);
};

const joinCourse = async (req, res) => {
  const { _id, course_id } = req.body;

  try {
    const trainee = await Trainee.joinCourse(_id, course_id);
    res.status(200).json({
      trainee,
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

const rateCourse = async (req, res) => {
  const { user_id, course_id, rating } = req.body;

  try {
    if (!user_id) throw Error("userID not Entered");
    const course = await Course.rateCourse(user_id, course_id, rating);

    res.status(200).json({
      course,
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

const reviewInstructor = async (req, res) => {
  const { _id, instructor_id, type, reviewString } = req.body;
  console.log(req.body);
  try {
    const review = await Trainee.reviewInstructor(
      _id,
      instructor_id,
      type,
      reviewString
    );

    res.status(200).json({
      review,
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};
const getPreview = async (req, res) => {
  const { courseId } = req.body;

  try {
    const previewURl = await Course.find({ _id: courseId }).select({
      coursePreviewUrl: 1,
      _id: 0,
    });
    res.status(200).json({
      previewURl,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      error: error.message,
    });
  }
};
const requestRefund = async (req, res) => {
  const { payment_id } = req.body;

  try {
    if (!payment_id) throw Error("payment_id not Entered");
    const payment = await Payment.findOne({
      _id: payment_id,
    });

    const course = await Course.findOne({
      _id: payment.course_id,
    });
    var trainee = await Trainee.findOne({
      _id: payment.user_id,
    });
    const instructor = await Instructor.findById({
      _id: course.instructor_id,
    });
    let sectionProgress = await CourseSectionProgress.findOne({
      user_id: payment.user_id,
      course_id: payment.course_id,
    });
    if (!sectionProgress)
      sectionProgress = await CourseSectionProgress.create({
        user_id: payment.user_id,
        course_id: payment.course_id,
        sectionTitle: "Introduction",
      });
    if (!course) throw Error("Course Does not Exist");
    if (!trainee) throw Error("Trainee Does not Exist");

    const percentage = sectionProgress.finishedPercentage;
    if (percentage > 50) {
      res.status(200).json({
        message:
          "Sorry you can't refund this course you Exceeded 50% of the materials",
      });
    } else {
      let ownedCourses = trainee.ownedCourses;
      ownedCourses = ownedCourses.filter(
        (course) => course.course_id.toString() != payment.course_id
      );
      await Instructor.findByIdAndUpdate(
        {
          _id: course.instructor_id,
        },
        {
          credit: instructor.credit - course.price,
        }
      );
      trainee = await Trainee.findByIdAndUpdate(
        {
          _id: payment.user_id,
        },
        {
          credit: trainee.credit + course.price,
          ownedCourses: ownedCourses,
        }
      );
      paymentUpdate = await Payment.findByIdAndUpdate(
        {
          _id: payment_id,
        },
        {
          status: "Refunded",
        }
      );

      await CourseSectionProgress.deleteOne({
        user_id: payment.user_id,
        course_id: payment.course_id,
      });
      res.status(200).json({
        trainee,
        paymentUpdate,
        instructor,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({
      error: error.message,
    });
  }
};

const getPaymentById = async (req, res) => {
  const { _id } = req.query;
  try {
    const payments = await Payment.find({ user_id: _id });
    res.status(200).json({
      payments,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      error: error.message,
    });
  }
};

module.exports = {
  joinCourse,
  rateCourse,
  reviewInstructor,
  getTraineebyId,
  getPreview,
  requestRefund,
  getPaymentById,
};
