import React from 'react'
import { useState , useEffect } from 'react'
import axios from 'axios'
import img1 from "../images/Course Image.png"
import img2 from "../images/Clock Icon.png"
import img3 from "../images/Lesson Icon.png"
import img4 from "../images/Level Icon.png"
import "../css/sectionCard.css"
import { Link } from 'react-router-dom'

export default function MaterialCard({materialID}) {

    const [material,setMaterial] = useState([]);

    const getMaterial = async () => {
        const res = await axios.get(
          `localhost:3000/lib/CourseMaterial?material_id=${materialID}`)
        .catch((err) => console.log(err));
        const data = await res.data;
        console.log(data);
        return data;
        
      };
    
      useEffect(() =>{
        getMaterial().then((data) => setMaterial(data))
      },[])

  return (
    <div>
        <div className="section-details"> 

            <div className="section-img">
                <img src={img1} alt="section Img" />
            </div>

            <div className="section-text">
                <h1>{material.name}</h1>
                
                

                
                <p>
                  <Link to={`/quizPage/${material._id}`}>
                    <button>View Material</button>
                  </Link>   
                </p>
            </div>

            <div className="section-info">


            </div>
            </div>
    </div>
  )
}
