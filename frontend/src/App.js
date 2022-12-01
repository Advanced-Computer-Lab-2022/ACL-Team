import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import './App.css';
import React from 'react';


import Signin from './Components/Authentication/Signin'
import AdminSignup from './pages/admin';
import GuestPage from './pages/guestPage';
import { TraineePage } from './pages/traineePage';
import { HomePage } from './pages/homePage';
import InstructorPage from './pages/instructor';
import { CourseDashboard } from './pages/courseDashboard';
import { CoursePage } from './pages/coursePage';

import SearchCoursePage from './pages/searchCoursePage';
import { InstructorEditProfile } from './pages/instructorEditProfile';
import SidebarPage from './pages/sidebarPage';
import { InstructorAddCourse } from './pages/instructorAddCoursePage';

import InstructorAddQuizPage from './pages/instructorAddQuizPage';

import VideoPage from './Components/Video Page/videoPage';
import Navbar from './Components/General/Navbar/navbar';
import InstructorCard from './Components/Instructor/instructorCard';
import TemplatePage from './pages/Template/TemplatePage';

import SignUpInstructor from './Components/Authentication/signUpInstructor';
import SignUpTrainee from './Components/Authentication/signUpTrainee';

import SignUp from './Components/Authentication/signUpForm';
import InstructorAddSectionPage from './pages/instructorAddSectionPage';
import InstructorAddDiscountPage from './pages/instructorAddDiscountPage';
import CourseCard from './Components/Cards/courseCard';
import Dropdown2 from './Components/General/Buttons/CategoryChoices';



import LoginComponent from './Components/LoginComponent';
import Login from './pages/login';
import Terms from './pages/terms';
import QuizPage from './pages/quizPage';
import InstructorAddSubtitle from './Components/Instructor/instructorAddSubtitle';
import InstructorCoursePage from './pages/instructorCoursePage';
import RateCourse from './Components/Cards/rateCourse';
import RateInstructor from './Components/Cards/rateInstructor';
import InstructorHomePage from './pages/instructor';
import InstructorEditBio from './pages/instructorEditBio';
import InstructorEditEmail from './pages/instructorEditEmail';
import InstructorEditPassword from './pages/instructorEditPassword';
import UserPage from './pages/UserPage';



function App() {
  return (
    <>

<Router>
      <Routes>
      <Route path='/signin' exact element={<Signin />} />
      <Route path='/signup/instructor' exact element={<SignUpInstructor/>} />
      <Route path='/signup/' exact element={<SignUpTrainee/>} />
      {/* <Route path='/admin' exact element={<AdminSignup/>} /> */}
      <Route path='/' exact element={<GuestPage/>} />
      <Route path='/trainee' exact element={<TraineePage/>} />
      <Route path='/user' exact element={<HomePage/>} />
      <Route path='/instructor' exact element={<InstructorHomePage/>} />
      <Route path='/course' exact element={<CourseDashboard/>} />
      <Route path='/course/coursePage' exact element={<CoursePage/>} />
      <Route path='/instructor/addCourse' exact element={<InstructorAddCourse/>} />
      <Route path='/course/courseShow' exact element={<SearchCoursePage/>} />
      <Route path='/instructor/editProfile' exact element={<InstructorEditProfile/>} />
      <Route path='/sidebar' exact element={<SidebarPage/>} />
      <Route path='/instructor/addDiscount' exact element={<InstructorAddDiscountPage/>} />
      <Route path='/instructor/addquiz' exact element={<InstructorAddQuizPage/>} />
      <Route path='/quizPage' exact element={<QuizPage/>} />
      <Route path='/VideoPage' exact element={<VideoPage/>} />
      <Route path='/login' exact element={<Login/>} />
      <Route path='/termsAndCond' exact element={<Terms/>} />
      <Route path='/instructor/addSection' exact element={<InstructorAddSectionPage/>} />

      <Route path='/instructor/coursepage' exact element={<InstructorCoursePage/>} />
      <Route path='/instructor/editBio' exact element={<InstructorEditBio/>} />
      <Route path='/instructor/editMail' exact element={<InstructorEditEmail/>} />
      <Route path='/instructor/editPassword' exact element={<InstructorEditPassword/>} />



      <Route path='/test' exact element={<InstructorCard/>} />
      <Route path='/test2' exact element={<TemplatePage/>} />


      <Route path='/test' exact element={<Navbar/>}/>
      <Route path='/test2' exact element={<Dropdown2/>} />

      {/* <Route path='/test3' exact element={<RateInstructor/>} /> */}
      <Route path='/rateInstructor' exact element={<RateInstructor/>} />
      <Route path='/rateCourse' exact element={<RateCourse/>} />
      <Route path='/userpage' exact element={<UserPage/>}/>






      
      
      {/* <Route path='/SignUp' exact element={<SignUp/>}/>
      <Route path='/Instructor' exact element={<Inst/>}/>
      <Route path='/InstructorProfile' exact element={<InstProfile/>}/>
      <Route path='/course' exact element={<Course/>}/>
       
      <Route path='/userProfile' exact element={<UserProfile/>}/> */}


      </Routes>
    </Router>
      
      
      
    </>
    
  )
}

export default App;
