import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'
import SubtitleCard from '../Components/Cards/subtitleCard';

export default function SubtitlePage() {

const {sectionid} = useParams();
const [subtitle,setSubtitles] = useState([]);

 const getSubtitleBySectionId = async () => {
    const res = await axios.get(`http://localhost:3000/course/?_id=${sectionid}`)
    .catch((err) => console.log(err));
    const data = await res.data;
    
    return data;
    
  };

  useEffect(() =>{
    getSubtitleBySectionId().then((data) => setSubtitles(data))

  },[])
  
  
    return (
    <div>
        <h2>Section - {sectionid}</h2>
        <SubtitleCard subtitle={subtitle}/>
    </div>
  )
}
