import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom'
import SubtitleCard from '../Components/Cards/subtitleCard';
import TraineeNavbar from '../Components/General/Navbar/TraineeNavbar';

export default function SubtitlePage() {

const {courseid} = useParams();
const {sectionid} = useParams();
const {traineeID} = useParams();
const [subtitles,setSubtitles] = useState([]);
const [videoLink, setVideoLink] = useState('');

 const getSubtitleBySectionId = async () => {
    const res = await axios.get(
      `http://localhost:3000/lib/CourseSubtitles?course_id=${courseid}&section_id=${sectionid}`)
    .catch((err) => console.log(err));
    const data = await res.data;
    
    return data;
    
  };

  useEffect(() =>{
    getSubtitleBySectionId().then((data) => setSubtitles(data))

  },[])

  
    return (
    <div>
      <TraineeNavbar/>
      
        {subtitles && subtitles.map((subtitle) =>(
          <SubtitleCard subtitle={subtitle} traineeID={traineeID}/>
        ))}


    </div>
  )
}
