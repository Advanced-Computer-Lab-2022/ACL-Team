import React from 'react'
import Navbar from '../Components/General/Navbar/navbar'
import "../Components/css/UserPage.css"
import image1 from "../Components/images/girlpp.svg"
import image2 from "../Components/images/icon.svg"
export default function UserPage() {
  return (
    <div >
        <Navbar/>
        <div className='instructor_review'>
        <img className='pp' src ={image1} alt ='image'></img>
        <p className='name'>Emily Nelson</p>
       
        
        <p className='email'>Email</p>
        <p className='emailR'>emily.n@hotmail.com</p>

        <p className='date'>Date of Birth</p>
        <p className='dateR'>December, 07, 2020</p>

        <p className='address'>Address</p>
        <p className='addressR'>Pasadena, California</p>
        
        <div className='cont'>
             <p className="review">
                Really enjoyed the course.
                I felt like I was getting
                what you had advertised online and much more!
             </p> 

        </div>
        <p className="auth">“</p>
        <p className="Name">Fionn Norris</p>
        
        
       

        <img className='icon' src ={image2} alt ='image'></img>

        </div>

        <div className='work'>
        <p className="workCSS">WORK ACTIVITY </p>
        <button  className='button1'>ABOUT</button>
        </div>

        <div className='courseComplete'>
        <p className="text-1">Courses Completed</p>
        <p className="text-2">11</p>
        </div>

        <div className='courseProgress'>
        <p className="text-1">Courses Progress</p>
        <p className="text-2">4</p>
        </div>

        <div className='quarter'>
        <p className="text-2-1">17</p>
        <p className="text-1-1">Projects
            done</p>

        </div>

        <div className='quarter2'>
        <p className="text-2-1">19%</p>
        <p className="text-1-1"> Succes Rate
            </p>

        </div>

        <div className='quarter3'>
        <p className="text-2-1">5</p>
        <p className="text-1-1"> Teams
            </p>

        </div>

        <div className='quarter4'>
        <p className="text-2-1">243</p>
        <p className="text-1-1"> Client Reports
            </p>

        </div>

    </div>
  )
}
