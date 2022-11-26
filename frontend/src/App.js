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
import SignUp from './Components/Authentication/signUp';
import InstructorAddSectionPage from './pages/instructorAddSectionPage';
import InstructorAddDiscountPage from './pages/instructorAddDiscountPage';





function App() {
  return (
    <>

<Router>
      <Routes>
      <Route path='/signin' exact element={<Signin />} />
      <Route path='/signup' exact element={<SignUp/>} />
      <Route path='/admin' exact element={<AdminSignup/>} />
      <Route path='/' exact element={<GuestPage/>} />
      <Route path='/trainee' exact element={<TraineePage/>} />
      <Route path='/user' exact element={<HomePage/>} />
      <Route path='/instructor' exact element={<InstructorPage/>} />
      <Route path='/course' exact element={<CourseDashboard/>} />
      <Route path='/course/coursePage' exact element={<CoursePage/>} />
      <Route path='/instructor/addCourse' exact element={<InstructorAddCourse/>} />
      <Route path='/course/courseShow' exact element={<SearchCoursePage/>} />
      <Route path='/instructor/editProfile' exact element={<InstructorEditProfile/>} />
      <Route path='/sidebar' exact element={<SidebarPage/>} />
      <Route path='/instructor/addDiscount' exact element={<InstructorAddDiscountPage/>} />
      <Route path='/addquiz' exact element={<InstructorAddQuizPage/>} />

      <Route path='/VideoPage' exact element={<VideoPage/>} />
      <Route path='/instructor/addSection' exact element={<InstructorAddSectionPage/>} />

      <Route path='/test' exact element={<InstructorCard/>} />
      <Route path='/test2' exact element={<TemplatePage/>} />






      
      
      {/* <Route path='/SignUp' exact element={<SignUp/>}/>
      <Route path='/Instructor' exact element={<Inst/>}/>
      <Route path='/InstructorProfile' exact element={<InstProfile/>}/>
      <Route path='/course' exact element={<Course/>}/>
      <Route path='/user' exact element={<UserPage/>}/>
      <Route path='/userProfile' exact element={<UserProfile/>}/> */}


      </Routes>
    </Router>
      
      
      
    </>
    
  )
}

export default App;
