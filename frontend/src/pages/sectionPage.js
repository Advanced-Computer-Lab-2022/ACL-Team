import React from 'react'
import { useParams } from 'react-router-dom'
import SectionCard from '../Components/Cards/sectionCard'
import Navbar from '../Components/General/Navbar/navbar'
import axios from 'axios'
export default function SectionPage() {
    const{id} = useParams()
    const getsectionsbyCourse_id = async () => {
        const res = await axios.get(`http://localhost:3000/`)
        .catch((err) => console.log(err));
        const data = await res.data;
        
        return data;
        
      };
  return (
    <div>
        <Navbar/>
        <div className="sectionPage_comp">
            <SectionCard/>
        </div>
    </div>
  )
}
