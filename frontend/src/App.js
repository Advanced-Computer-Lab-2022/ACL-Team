import React from 'react';
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


// import Course from './pages/Course';
import SignIn from './pages/SignIn';
import Inst from './pages/Instructor';
import Home from './pages/Home';
import Course from './pages/Course';
import SignUp from './pages/SignUp';



function App() {
  console.log("HII");
  return (
    <Router>
      <Routes>
      <Route path='/' exact element={<Home/>} />
      <Route path='/SignIn' exact element={<SignIn></SignIn>} />
      <Route path='/SignUp' exact element={<SignUp/>}/>
      <Route path='/Instructor' exact element={<Inst/>}/>
      <Route path='/Course' exact element={<Course/>}/>


      </Routes>
    </Router>
  );
}

export default App;
