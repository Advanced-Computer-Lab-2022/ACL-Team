import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import TraineeNavbar from '../Components/General/Navbar/TraineeNavbar'
import axios from 'axios'
import { useEffect } from 'react'
import ReactPlayer from 'react-player/youtube'

export default function PreviewPage() {
    
  
    const {courseID} = useParams()
    const [url , setURL] = useState([])
    
    const getPreviewVideo = async () => {
        
        // console.log("boodaa")
       console.log(courseID)
        const res = await axios
          .post("http://localhost:3000/trainee/getPreview", {
            courseId:courseID
          })
          .catch((err) => console.log(err));
          const data = await res.data;
          
                
          console.log(data.previewURl[0].coursePreviewUrl)
          
        
          
        return data.previewURl[0].coursePreviewUrl ;
      };

      useEffect(() =>{ 
        getPreviewVideo().then((url) => setURL(url))
      });
  return (
    <div>
        <TraineeNavbar/>
        <div className="course_description">
            <ul className="label_list">
                <li>
                    <label><span>Course Name:</span></label>
                </li>

                <li>
                    <label><span id="sub_videoDescriptions">Course Description:</span><br/><p id='description'></p></label>
                </li>
            </ul>
                 
        
        </div>

         <div className="preview_video">
         <ReactPlayer url={url}/>
        </div> 
      
    </div>
  )
}
