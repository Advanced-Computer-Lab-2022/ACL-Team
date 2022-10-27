import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import './App.css';
import React from 'react';


import Signin from './Components/Signin';
import Signup from './pages/Signup';
import AdminSignup from './pages/admin';


function App() {
  return (
    <>

<Router>
      <Routes>
      <Route path='/' exact element={<Signin />} />
      <Route path='/signup' exact element={<Signup/>} />
      <Route path='/admin' exact element={<AdminSignup/>} />
      
      
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
