
import { useParams } from 'react-router-dom'
import React, {useState,useEffect} from 'react'
import axios from 'axios'
import CourseCard from '../Components/Cards/courseCard';
import RatingsCard from '../Components/Course/ratingsCard';
import Rating from '../Components/Cards/rating';

export default function ViewInstructorReviews() {
    const{instructorID}=useParams();
    console.log(instructorID);

    const [reviews, setReviews] = useState([]);
    const [reviewer_id, setReviewer_id] = useState([]);
    const [instructor,setInstructor] = useState([])


    const getInstructor= async () => {
        const res = await axios.get(`http://localhost:3000/instructor/getInstructor?_id=${instructorID}`)
        .catch((err) => console.log(err));
        const data = await res.data;
        
        return data;
        
      };

      useEffect(() =>{
        getInstructor().then((data) => setInstructor(data))

        getInstructor().then((data) => setReviews(data.reviews))
    
      },[])

      console.log(instructor)

      console.log(reviews)

      
  let total =0;

  return (
    <div>
      
       {reviews && reviews.map((review  ) =>(
            
            <Rating review={review} />
            
            )

         
          )} 

         
    </div>
  )
}
