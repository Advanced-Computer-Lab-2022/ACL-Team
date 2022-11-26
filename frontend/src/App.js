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
import { InstructorAddCourse } from './pages/instructorAddCourse';
import SearchCoursePage from './pages/searchCoursePage';
import { InstructorEditProfile } from './pages/instructorEditProfile';
import SidebarPage from './pages/sidebarPage';
import VideoPage from './Components/Video Page/videoPage';
import Navbar from './Components/General/Navbar/navbar';
import InstructorCard from './Components/Instructor/instructorCard';
import TemplatePage from './pages/Template/TemplatePage';
import SignUp from './Components/Authentication/signUp';
import CourseCard from './Components/Course/courseCard';
import Dropdown2 from './Components/General/Buttons/CategoryChoices';




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
      <Route path='/VideoPage' exact element={<VideoPage/>} />


      <Route path='/test' exact element={<Navbar/>}/>
      <Route path='/test2' exact element={<Dropdown2/>} />
      <Route path='/test3' exact element={<CourseCard/>} />








      
      
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
