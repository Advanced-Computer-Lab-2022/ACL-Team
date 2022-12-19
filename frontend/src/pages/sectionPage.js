import React from 'react'
import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import SectionCard from '../Components/Cards/sectionCard'
import Navbar from '../Components/General/Navbar/navbar'
import axios from 'axios'
import Progress_bar from '../Components/General/ProgressBar'
export default function SectionPage() {
    const{courseid} = useParams();
    const [sections,setSections] = useState([]);

    

    const getsectionsbyCourse_id = async () => {
        const res = await axios.get(`http://localhost:3000/lib/CourseSections?_id=${courseid}`)
        .catch((err) => console.log(err));
        const data = await res.data;
        
        return data;
        
      };

      useEffect(() =>{
        getsectionsbyCourse_id().then((data) => setSections(data))
    
      },[]);



  return (
    <div>
        <Navbar/>

        <h2>{courseid}</h2>
        <Progress_bar bgcolor="#99ff66" progress='80'  height={30} />
        <div className="sectionPage_comp">

        {sections && sections.map((section) =>(
          <SectionCard section={section}/>
        ))}
            
        </div>
    </div>
  )
}
