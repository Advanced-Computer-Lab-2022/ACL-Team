const express = require("express");
const { requestCourse } = require("../controller/trainee/corporateController");
const {
  rateCourse,
  reviewInstructor,
  getTraineebyId,
  joinCourse,
  getPreview,
  requestRefund,
  getPaymentById,
} = require("../controller/trainee/traineeController");
const {
  answerQuestion,
  getQuestionGrade,
  getQuizGrade,
  getJoinedCourses,
  getEmailandSendCertifiate,
  getMyReviews,
  editInstructorReview,
  deleteInstructorReview,
  getReview,
} = require("../controller/trainee/traineeCourseController");
const User = require("../models/userSchema");

const router = express.Router();

router.post("/joinCourse", joinCourse);

router.post("/rateCourse", rateCourse);

router.post("/reviewInstructor", reviewInstructor);

router.post("/answerQuestion", answerQuestion);

router.post("/getCertificate", getEmailandSendCertifiate);

router.post("/getPreview", getPreview);

router.get("/getTrainee", getTraineebyId);

router.get("/questionGrade", getQuestionGrade);

router.post("/quizGrade", getQuizGrade);

router.get("/myCourses", getJoinedCourses);

router.post("/requestRefund", requestRefund);

router.get("/getPayments", getPaymentById);

router.get("/getReview", getReview);

router.get("/myInstructorReviews", getMyReviews);

router.post("/editInstructorReview", editInstructorReview);

router.post("/deleteInstructorReview", deleteInstructorReview);

//ALL ROUTES BELOW HERE ARE FOR CORPORATE TRAINEE ONLY

router.post("/requestCourse", requestCourse);

module.exports = router;
