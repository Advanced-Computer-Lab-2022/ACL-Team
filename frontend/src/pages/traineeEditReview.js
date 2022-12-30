import React , {useState,useEffect} from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom'
import TraineeEditReviewCard from '../Components/Cards/traineeEditReviewCard';

export default function TraineeEditReview() {

    const {reviewID} = useParams();

    const [review,setReview] = useState([]);

    const getReview= async () => {
        const res = await axios.get(`http://localhost:3000/trainee/getReview?_id=${reviewID}`)
        .catch((err) => console.log(err));
        const data = await res.data;
        
        return data;
        
      };
    
      useEffect(() =>{
        getReview().then((data) => setReview(data))
    
      },[])

  return (
    <div>
        <TraineeEditReviewCard reviewID={reviewID} />
    </div>
  )
}
