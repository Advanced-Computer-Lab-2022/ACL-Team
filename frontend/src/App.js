import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/Navbar';

import Course from './components/Course';
// import Sign_Up from './components/SignUpForm';
// import Sign_In from './components/SignInForm';


function App() {
  return (
    <Router>
      <Navbar />
      <br/>
      <Route path='/' exact component={Course} />
      {/* <Route path='/edit/:id' component={Sign_Up} />
      <Route path='/create' component={Sign_In} /> */}
    </Router>
  );
}

export default App;
