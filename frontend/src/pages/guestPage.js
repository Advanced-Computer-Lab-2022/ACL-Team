import React from 'react'
// import Dropdown from '../Components/General/Buttons/ButtonsList'
import Navbar from '../Components/General/Navbar/navbar'
import "../Components/css/guestPage.css"
import image1 from "../Components/images/image1.svg"
import image2 from "../Components/images/Learn.svg"
import image3 from "../Components/images/sponser.svg"
import image4 from "../Components/images/Mission.svg"
import image5 from "../Components/images/profile1.svg"
import image9 from "../Components/images/profile2.png"
import image10 from "../Components/images/profile3.png"
import image11 from "../Components/images/profile4.svg"
import CourseCard from "../Components/Cards/courseCard"
import image6 from "../Components/images/hat.svg"
import image7 from "../Components/images/grad.svg"
import image8 from "../Components/images/star.svg"






export default function GuestPage() {
  return (
    <div className="PageColor">
      <Navbar/>
      <div className='container1'>
      <img className='boda' src ={image1} alt ='image'></img>
      <img className='left' src ={image2} alt ='image'></img>
      <p className='best'>Best way to learn from anywhere</p>
      <div className='text'>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium sapien, 
        ipsum eu et habitant arcu dignissim egestas ipsum. Sit nunc euismod dui,
         posuere mattis urna. Quis risus proin quam porttitor diam erat pellentesque. </p>
      </div>
        </div> 
        <div className='button1c'>
        <button  className='button1'><a href="/signup">Start Learning</a></button >
        </div>
        <div className='button2c'>
        <button  className='button2'><a href="/login">Login</a></button>
        </div>
        <div>
        <button  className='button3'>Discover</button>
        </div>
        <img className='sponser' src ={image3} alt ='image'></img>
        <div>
        <img className='Mission' src ={image4} alt ='image'></img>
        <a href='/login'> 
        <button  className='button5'>Login</button>
        </a>
       
        </div>

        <div className='instructors_card'>

        <div className='card1'>
          <a href='/rateInstructor'>
          <img className='profile' src ={image5} alt ='image'></img>
          </a>
        
        <button  className='button6'>Join now</button>
        <p className=" coursecount">19 Courses</p>
        <p className=" studentcount">25,599 Students</p>
        <p className=" starcount">3</p>
        <p className=" name">Abdullah shoeib</p>
        <p className=" job">UI/UX Designer</p>
        <img className='hat' src ={image6} alt ='image'></img>
        <img className='grad' src ={image7} alt ='image'></img>
        <a href='/rateCourse'>
        <img className='star' src ={image8} alt ='image'></img>
        </a>
        </div>

        <div className='card1'>
          <a href='/rateInstructor' >
          <img className='profile' src ={image9} alt ='image'></img>
          </a>
        <button  className='button7'>Join now</button>
        <p className=" coursecount">19 Coursesd </p>
        <p className=" studentcount">25,599 Students</p>
        <p className=" starcount">3</p>
        <p className=" name">Mazen Hejazy</p>
        <p className=" job">UI/UX Designer</p>
        <img className='hat' src ={image6} alt ='image'></img>
        <img className='grad' src ={image7} alt ='image'></img>
        <a href='/rateCourse'>
        <img className='star' src ={image8} alt ='image'></img>
        </a>
        </div>

        <div className='card1'>
          <a href='/rateInstructor'>
          <img className='profile' src ={image10} alt ='image'></img>
          </a>
        <button  className='button7'>Join now</button>
        <p className=" coursecount">19 Courses</p>
        <p className=" studentcount">25,599 Students</p>
        <p className=" starcount">3</p>
        <p className=" name">Marwan Ashraf</p>
        <p className=" job">UI/UX Designer</p>
        <img className='hat' src ={image6} alt ='image'></img>
        <img className='grad' src ={image7} alt ='image'></img>
        <a href='/rateCourse'>
        <img className='star' src ={image8} alt ='image'></img>
        </a>
        </div>

        <div className='card1'>
          <a href='/rateInstructor'> 
          <img className='profile4' src ={image11} alt ='image'></img>
          </a>
          <button  className='button7'>Join now</button>
        <p className=" coursecount">19 Courses</p>
        <p className=" studentcount">25,599 Students</p>
        <p className=" starcount">3</p>
        <p className=" name">Ghazouly El-hendy</p>
        <p className=" job">UI/UX Designer</p>
        <img className='hat' src ={image6} alt ='image'></img>
        <img className='grad' src ={image7} alt ='image'></img>
        <a href='/rateCourse'>
        <img className='star' src ={image8} alt ='image'></img>
        </a>
       
        </div>

        </div>


              
       <div className='coursecard'>
        
       </div>

     
      
     
    </div>
    
  )

}

