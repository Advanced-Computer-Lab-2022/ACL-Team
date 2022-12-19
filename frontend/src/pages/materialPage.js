import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'
import SubtitleCard from '../Components/Cards/subtitleCard';
import MaterialCard from '../Components/Cards/materialCard';
import TraineeNavbar from '../Components/General/Navbar/TraineeNavbar';

export default function MaterialPage() {

const {courseid} = useParams();
const {sectionid} = useParams();
const {traineeID} = useParams();
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
      <TraineeNavbar/>
      <h1>CourseID: {courseid} </h1>
      <h1>SectionID: {sectionid} </h1>
      {/* <h1>MaterialID: {courseid} </h1> */}
        

        {quizes && quizes.map((quiz) =>(
          <MaterialCard courseID={courseid} sectionID={sectionid} materialID={quiz._id} traineeID={traineeID} />
          //<p>{quiz._id}</p>
        ))}

    </div>
  )
}
