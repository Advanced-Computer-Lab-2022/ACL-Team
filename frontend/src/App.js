import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import React from "react";

import Signin from "./Components/Authentication/Signin";
import AdminSignup from "./pages/admin";
import GuestPage from "./pages/guestPage";
import { TraineePage } from "./pages/traineePage";
import { HomePage } from "./pages/homePage";
import InstructorPage from "./pages/instructor";
import { CourseDashboard } from "./pages/courseDashboard";
import { CoursePage } from "./pages/coursePage";

import SearchCoursePage from "./pages/searchCoursePage";
import { InstructorEditProfile } from "./pages/instructorEditProfile";
import { TraineeEditProfile } from "./pages/TraineeEditProfile";
import SidebarPage from "./pages/sidebarPage";
import { InstructorAddCourse } from "./pages/instructorAddCoursePage";

import InstructorAddQuizPage from "./pages/instructorAddQuizPage";

import VideoPage from "./Components/Video Page/videoPage";
import Navbar from "./Components/General/Navbar/navbar";
import InstructorCard from "./Components/Instructor/instructorCard";
import TemplatePage from "./pages/Template/TemplatePage";

import SignUpInstructor from "./Components/Authentication/signUpInstructor";
import SignUpTrainee from "./Components/Authentication/signUpTrainee";

import SignUp from "./Components/Authentication/signUpForm";
import InstructorAddSectionPage from "./pages/instructorAddSectionPage";
import InstructorAddDiscountPage from "./pages/instructorAddDiscountPage";
import CourseCard from "./Components/Cards/courseCard";
import Dropdown2 from "./Components/General/Buttons/CategoryChoices";

import LoginComponent from "./Components/LoginComponent";
import Login from "./pages/login";
import Terms from "./pages/terms";
import QuizPage from "./pages/quizPage";
import InstructorAddSubtitle from "./Components/Instructor/instructorAddSubtitle";
import InstructorCoursePage from "./pages/instructorCoursePage";
import RateCourse from "./Components/Cards/rateCourse";
import RateInstructor from "./Components/Cards/rateInstructor";
import InstructorHomePage from "./pages/instructor";
import InstructorEditBio from "./pages/instructorEditBio";
import InstructorEditEmail from "./pages/instructorEditEmail";
import InstructorEditPassword from "./pages/instructorEditPassword";
import UserPage from "./pages/UserPage";
import InstructorCardBig from "./Components/Instructor/instructorCardBig";

import SectionPage from "./pages/sectionPage";
import TermsInstructor from "./pages/TermsInstructor";
import TermsTrainee from "./pages/TermsTrainee";
import AllCourses from "./pages/AllCourses";
import Temp from "./pages/Temp";

import SubtitlePage from "./pages/subtitlePage";
import MaterialPage from "./pages/materialPage";
import Drawer from "./Components/drawer";
import Search from "./pages/search";
import QuestionsComponents from "./Components/Instructor/questionsComponents";
import QuestionCard from "./Components/Cards/questionCard";
import QuestionCard2 from "./Components/Cards/questionCard2";
import QuizResultsPage from "./pages/quizResultsPage";
import ViewInstructorReviews from "./pages/ViewInstructorReviews";
import ForgetPassword from "./Components/Authentication/forgetPassword";

import AdminReportsPage from "./pages/adminReportsPage";
import TraineeOwnedCourses from "./pages/traineeOwnedCourses";
import FaqPage from "./pages/faqPage";
import AdminCourseRequests from "./pages/adminCourseRequests";
import InstructorAddPreviewURL from "./Components/Instructor/instructorAddPreviewURL";
import InstructorAddPreviewPage from "./pages/instructorAddPreviewPage";
import AddDiscount from "./Components/Admin/addDiscount";
import AdminViewCourses from "./pages/adminViewCourses";
import PreviewPage from "./pages/previewPage";
import ResetPasswordPage from "./pages/resetPasswordPage";
import InstructorDrawer from "./Components/InstructorDrawer";
import TraineeInstructorReviews from "./pages/traineeInstructorReviews";
import TraineeEditReview from "./pages/traineeEditReview";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/signin" exact element={<Signin />} />
          <Route
            path="/signup/instructor"
            exact
            element={<SignUpInstructor />}
          />
          <Route path="/signup/" exact element={<SignUpTrainee />} />
          <Route path="/admin/:adminID" exact element={<AdminSignup />} />
          <Route
            path="/admin/AllCourses/:adminID"
            exact
            element={<AdminViewCourses />}
          />
          <Route path="/admin/Reports" exact element={<AdminReportsPage />} />
          <Route
            path="/admin/courseRequests"
            exact
            element={<AdminCourseRequests />}
          />
          <Route path="/" exact element={<GuestPage />} />
          <Route path="/trainee/:traineeID" exact element={<TraineePage />} />
          <Route
            path="/trainee/myCourses/:traineeID"
            exact
            element={<TraineeOwnedCourses />}
          />
          <Route
            path="/trainee/myReviews/:traineeID"
            exact
            element={<TraineeInstructorReviews />}
          />
          <Route
            path="/trainee/editMyReview/:reviewID"
            exact
            element={<TraineeEditReview />}
          />
          <Route path="/user" exact element={<HomePage />} />
          <Route
            path="/instructor/:id"
            exact
            element={<InstructorHomePage />}
          />
          <Route path="/course" exact element={<CourseDashboard />} />
          <Route path="/course/coursePage/:id" exact element={<CoursePage />} />
          <Route
            path="/instructor/addCourse/:instructorID"
            exact
            element={<InstructorAddCourse />}
          />
          <Route
            path="/course/courseShow"
            exact
            element={<SearchCoursePage />}
          />
          <Route
            path="/instructor/editProfile/:instructorID"
            exact
            element={<InstructorEditProfile />}
          />
          <Route
            path="/TraineeEditProfile"
            exact
            element={<TraineeEditProfile />}
          />
          <Route path="/sidebar" exact element={<SidebarPage />} />
          <Route
            path="/instructor/addDiscount/:courseID&:instructorID"
            exact
            element={<InstructorAddDiscountPage />}
          />
          <Route
            path="/instructor/addquiz/:courseID"
            exact
            element={<InstructorAddQuizPage />}
          />
          <Route path="/quizPage" exact element={<QuizPage />} />
          <Route path="/VideoPage/:courseID" exact element={<VideoPage />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/termsAndCond" exact element={<Terms />} />
          <Route
            path="/instructor/addSection/:courseID"
            exact
            element={<InstructorAddSectionPage />}
          />

          <Route
            path="/instructor/coursepage"
            exact
            element={<InstructorCoursePage />}
          />
          <Route
            path="/instructor/editBio/:instructorID"
            exact
            element={<InstructorEditBio />}
          />
          <Route
            path="/instructor/editMail/:instructorID"
            exact
            element={<InstructorEditEmail />}
          />
          <Route
            path="/instructor/editPassword"
            exact
            element={<InstructorEditPassword />}
          />
          <Route
            path="/trainee/sectionPage/:courseid&:traineeID"
            exact
            element={<SectionPage />}
          />
          <Route
            path="/trainee/SubtitlePage/:courseid&:sectionid&:traineeID"
            exact
            element={<SubtitlePage />}
          />
          <Route
            path="/trainee/MaterialPage/:courseid&:sectionid&:traineeID"
            exact
            element={<MaterialPage />}
          />
          <Route
            path="/quizPage/:courseID&:sectionID&:materialID&:traineeID"
            exact
            element={<QuizPage />}
          />
          <Route
            path="/quizResult/:courseID&:sectionID&:materialID&:traineeID"
            exact
            element={<QuizResultsPage />}
          />
          <Route
            path="/signUp/instructor/TermsInstructor"
            exact
            element={<TermsInstructor />}
          />
          <Route
            path="signUp/trainee/termsTrainee"
            exact
            element={<TermsTrainee />}
          />
          <Route path="/FAQ" exact element={<FaqPage />} />

          <Route
            path="/instructor/ViewReviews/:instructorID"
            exact
            element={<ViewInstructorReviews />}
          />

          <Route path="/test2" exact element={<TemplatePage />} />
          <Route
            path="/trainee/filterCourses/:traineeID"
            exact
            element={<Drawer />}
          />
          <Route
            path="/instructor/filterCourses/:instructorID"
            exact
            element={<InstructorDrawer />}
          />
          <Route path="/test10" exact element={<AddDiscount />} />

          <Route path="/test" exact element={<Temp />} />
          <Route path="/test5" exact element={<QuestionsComponents />} />

          {/* <Route path='/test3' exact element={<RateInstructor/>} /> */}
          <Route path="/rateInstructor" exact element={<RateInstructor />} />
          <Route path="/rateCourse" exact element={<RateCourse />} />
          <Route path="/userpage" exact element={<UserPage />} />
          <Route path="trainee/allCourses" exact element={<AllCourses />} />
          <Route path="trainee/search" exact element={<Search />} />

          <Route path="/forgetPassword" exact element={<ForgetPassword />} />
          <Route path="/search" exact element={<Search />} />
          <Route
            path="/instructor/addCoursePreview/:courseID"
            exact
            element={<InstructorAddPreviewPage />}
          />
          <Route
            path="/course/preview/:courseID"
            exact
            element={<PreviewPage />}
          />
          <Route
            path="/login/resetPassword/:userID/:token"
            exact
            element={<ResetPasswordPage />}
          />

          {/* <Route path='/SignUp' exact element={<SignUp/>}/>
      <Route path='/Instructor' exact element={<Inst/>}/>
      <Route path='/InstructorProfile' exact element={<InstProfile/>}/>
      <Route path='/course' exact element={<Course/>}/>
       
      <Route path='/userProfile' exact element={<UserProfile/>}/> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
