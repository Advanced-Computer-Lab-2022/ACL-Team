import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'
import SubtitleCard from '../Components/Cards/subtitleCard';
import MaterialCard from '../Components/Cards/materialCard';

export default function MaterialPage() {

const {courseid} = useParams();
const {sectionid} = useParams();
const [quizes,setQuizes] = useState([]);

 const getSubtitleBySectionId = async () => {
    const res = await axios.get(
      `http://localhost:3000/lib/CourseSubtitles?course_id=${courseid}&section_id=${sectionid}`)
    .catch((err) => console.log(err));
    const data = await res.data;
    // console.log(data);
    return data;
    
    
  };

  useEffect(() =>{
    getSubtitleBySectionId().then((data) => setQuizes(data[0].quizes))
  },[])

  

  
    return (
    <div>
  
        {quizes && quizes.map((quiz) =>(
          <MaterialCard materialID={quiz._id}/>
          // <p>{quiz._id}</p>
        ))}

    </div>
  )
}
