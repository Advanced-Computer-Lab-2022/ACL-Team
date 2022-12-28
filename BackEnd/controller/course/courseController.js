const Course = require("../../models/course/courseSchema");

const Fuse = require("fuse.js");
const CourseSection = require("../../models/course/courseSectionSchema");
const CourseSubtitle = require("../../models/course/courseSubtitleSchema");
const Question = require("../../models/course/questionSchema");
const CourseSectionProgress = require("../../models/course/courseProgress/courseSectionProgress");
const Payment = require("../../models/lib/payment/paymentSchema");
const Trainee = require("../../models/traineeSchema");

const stripe = require("stripe")(
  process.env.STRIPE_KEY ||
    "sk_test_51MFdfGDZGE0sbGNF5ijUysPTPes2023txzn262u9e3xrA8hgD3Sou1KumZqfRU88MG0xz6DLZNRAQWdWM8N8G0Ra00Em82CNAr"
);

//get all courses available
const getAllCourses = async (req, res) => {
  const courses = await Course.find().sort({
    createdAt: -1,
  });

  res.status(200).json(courses);
};
//get a course
const getCourseById = async (req, res) => {
  const _id = req.query;

  const course = await Course.findById(_id);

  if (!course) {
    return res.status(404).json({
      error: "course not found",
    });
  }

  res.status(200).json(course);
};

const getCourseByInstructor = async (req, res) => {
  const courses = await Course.find().sort({
    createdAt: -1,
  });
  const options = {
    includeScore: true,
    keys: ["name"],
  };
  const fuse = new Fuse(courses, options);
  const result = fuse.search(req.instructor._id);
  res.status(200).json(result);
};

const getCourseByTitle = async (req, res) => {
  const courses = await Course.find().sort({
    createdAt: -1,
  });
  const options = {
    includeScore: true,
    keys: ["name"],
  };
  const fuse = new Fuse(courses, options);
  const result = fuse.search(req.title);
  res.status(200).json(result);
};

const getCourseBySubject = async (req, res) => {
  const courses = await Course.find().sort({
    createdAt: -1,
  });
  const options = {
    includeScore: true,
    keys: ["subject"],
  };
  const fuse = new Fuse(courses, options);
  const result = fuse.search(req.subject);
  res.status(200).json(result);
};
//get course title and total hours and ratings
const getAll = async (req, res) => {
  const courses = await Course.find({});
};

const getCoursesByCategory = async (req, res) => {
  const { category } = req.body;
  try {
    const courses = await Course.getCoursesByCategory(category);
    res.status(200).json(courses);
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

const getCoursesByPrice = async (req, res) => {
  const { price } = req.body;
  console.log(req.body);
  console.log(price);
  try {
    const courses = await Course.getCoursesByPrice(price);
    res.status(200).json(courses);
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

const getCoursesByPriceFromLowToHigh = async (req, res) => {
  try {
    const courses = await Course.getCoursesByPriceFromLowToHigh();
    res.status(200).json(courses);
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

const search = async (req, res) => {
  const { searchedword } = req.body;

  try {
    const courses = await Course.search(searchedword);

    res.status(200).json(courses);
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};
const getCoursesByPriceFromHighToLow = async (req, res) => {
  try {
    const courses = await Course.getCoursesByPriceFromHighToLow();
    res.status(200).json(courses);
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

const getCoursesByRating = async (req, res) => {
  const { rating } = req.body;
  try {
    const courses = await Course.getCoursesByRating(rating);
    res.status(200).json(courses);
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

const getCoursesByRatingFromLowToHigh = async (req, res) => {
  try {
    const courses = await Course.getCoursesByRatingFromLowToHigh();
    res.status(200).json(courses);
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

const getCoursesByRatingFromHighToLow = async (req, res) => {
  try {
    const courses = await Course.getCoursesByRatingFromHighToLow();
    res.status(200).json(courses);
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

const getCourseSections = async (req, res) => {
  const { _id } = req.query;

  try {
    if (!_id) throw Error("All fields must be filled");

    const course = await Course.find({
      _id,
    });
    if (!course) throw Error("Course Does not Exist");

    const sections = await CourseSection.find({
      course_id: _id,
    });
    if (!sections) throw Error("No Sections Exist in this Course");

    res.status(200).json(sections);
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};
const getCourseSubtitles = async (req, res) => {
  const { course_id, section_id } = req.query;

  console.log(req.query);

  try {
    if (!course_id || !section_id) throw Error("All fields must be filled");

    const course = await Course.find({
      course_id,
    });
    if (!course) throw Error("Course Does not Exist");

    const sections = await CourseSection.find({
      course_id,
    });
    if (!sections) throw Error("No Sections Exist in this Course");

    const subtitles = await CourseSubtitle.find({
      course_id,
      section_id,
    });
    if (!subtitles)
      //THIS ERROR SHOULD NEVER APPEAR AS WE ALWAYS MAKE THE COURSE AND HANDLE IT IF IT APPEARED D:
      throw Error("No Subtitles Exist in this Course");

    res.status(200).json(subtitles);
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};
const getQuestion = async (req, res) => {
  const { _id } = req.query;

  try {
    if (!_id) throw Error("All fields must be filled");

    const question = await Question.findById({
      _id,
    });
    if (!question) throw Error("Question Does not Exist");

    res.status(200).json(question);
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};
const getSectionProgress = async (req, res) => {
  const { user_id, course_id } = req.query;

  try {
    if (!user_id || !course_id) throw Error("All fields must be filled");

    const sectionProgress = await CourseSectionProgress.findOne({
      user_id: user_id,
      course_id: course_id,
    });
    if (!sectionProgress) throw Error("Sectoion Progress Does not Exist");

    res.status(200).json(sectionProgress);
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};
const payForCourse = async (req, res) => {
  const { course_id, user_id } = req.body;

  try {
    //find course by id

    const course = await Course.findById({
      _id: course_id,
    });
    if (!course) throw Error("Course Does not Exist");
    const title = course.title;
    const description = course.description;
    const price = course.price;
    const checkoutSession = await stripe.checkout.sessions.create({
      success_url: `http://localhost:3001/course/coursePage/${course_id}?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `http://localhost:3001/course/coursePage/${course_id}`,
      client_reference_id: user_id,
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: "usd",
            unit_amount: price,
            product_data: {
              name: title,
              description: description,
            },
          },
        },
      ],
      mode: "payment",
    });

    res.status(200).json(checkoutSession.url);
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

const saveCheckout = async (req, res) => {
  const { session_id, course_id } = req.body;
  try {
    const session = await stripe.checkout.sessions.retrieve(session_id);
    const user_id = session.client_reference_id;
    const course = await Course.findById({
      _id: course_id,
    });
    const paymentSearch = await Payment.findOne({
      session_id: session_id,
    });
    if (paymentSearch) throw Error("Payment Already Exists");
    const payment = await Payment.create({
      payment_title: course.title,
      user_id: session.client_reference_id,
      course_id: course_id,
      session_id: session_id,
      price: session.amount_total,
      currency: session.currency,
      type: session.payment_method_types[0],
      status: "paid",
    });
    const trainee = await Trainee.joinCourse(user_id, course_id);

    res.status(200).json({ payment: payment, trainee: trainee });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

module.exports = {
  getAllCourses,
  getCourseById,
  getCoursesByCategory,
  getCoursesByPriceFromLowToHigh,
  getCoursesByPriceFromHighToLow,
  getCoursesByRating,
  getCoursesByRatingFromLowToHigh,
  getCoursesByRatingFromHighToLow,
  getCoursesByPrice,
  getCourseSections,
  getCourseSubtitles,
  getQuestion,
  search,
  getSectionProgress,
  payForCourse,
  saveCheckout,
};
