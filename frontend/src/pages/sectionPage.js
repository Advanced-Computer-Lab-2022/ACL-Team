import React from 'react'
import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import SectionCard from '../Components/Cards/sectionCard'
import Navbar from '../Components/General/Navbar/navbar'
import axios from 'axios'
export default function SectionPage() {
    const{id} = useParams();
    const [sections,setSections] = useState([]);

    const getsectionsbyCourse_id = async () => {
        const res = await axios.get(`http://localhost:3000/course/CourseSections?_id=${id}`)
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
        <div className="sectionPage_comp">

        {sections && sections.map((section) =>(
          <SectionCard section={section}/>
        ))}
            
        </div>
    </div>
  )
}
