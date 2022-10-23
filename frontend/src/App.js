import React from 'react';
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';



import SignIn from './pages/login';
import Inst from './pages/Instructor';
import Home from './pages/Home';
import Course from './pages/course';
import SignUp from './pages/signUp';
import UserPage from './pages/user';
import InstProfile from './pages/InstructorProfile';
import UserProfile from './pages/userProfile';



function App() {
  console.log("HII");
  return (
    <Router>
      <Routes>
      <Route path='/' exact element={<Home/>} />
      <Route path='/login' exact element={<SignIn></SignIn>} />
      <Route path='/SignUp' exact element={<SignUp/>}/>
      <Route path='/Instructor' exact element={<Inst/>}/>
      <Route path='/InstructorProfile' exact element={<InstProfile/>}/>
      <Route path='/course' exact element={<Course/>}/>
      <Route path='/user' exact element={<UserPage/>}/>
      <Route path='/userProfile' exact element={<UserProfile/>}/>


      </Routes>
    </Router>
  );
}

export default App;
