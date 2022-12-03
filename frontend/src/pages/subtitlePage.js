import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'
import SubtitleCard from '../Components/Cards/subtitleCard';

export default function SubtitlePage() {

const {courseid} = useParams();
const {sectionid} = useParams();
const [subtitles,setSubtitles] = useState([]);

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
        <h2>Course - {courseid}</h2>
        <h2>Section - {sectionid}</h2>
        

        {subtitles && subtitles.map((subtitle) =>(
          <SubtitleCard subtitle={subtitle}/>
        ))}

    </div>
  )
}
