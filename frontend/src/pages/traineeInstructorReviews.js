import React, {useEffect , useState} from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom'
import TraineeReview from '../Components/Cards/traineeReviewCards';

export default function TraineeInstructorReviews() {
    
    const {traineeID} = useParams();

    const [myReviews, setMyReviews] = useState([]);

    const getMyReviews = async () => {
      const res = await axios.get(`http://localhost:3000/trainee/myInstructorReviews?_id=${traineeID}`)
      .catch((err) => console.log(err));
      const data = await res.data;
      
      return data;
      
    };

    useEffect(() =>{
      getMyReviews().then((data) => setMyReviews(data.reviews))
    },[])

    console.log(myReviews)

  return (
    <div>
      {myReviews && myReviews.map((review) => (
            <TraineeReview review={review}/> 
        ))} 
    </div>
  )
}
