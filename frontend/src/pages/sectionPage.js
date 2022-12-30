//import React from 'react'
import {useState, useEffect , React} from 'react'
import { Form, useParams } from 'react-router-dom'
import SectionCard from '../Components/Cards/sectionCard'
import axios from 'axios'
import TraineeNavbar from '../Components/General/Navbar/TraineeNavbar'
import Progress_bar from '../Components/General/ProgressBar'


export default function SectionPage() {
    //const{pdf}="completion.pdf";
    const{courseid} = useParams();
    const {traineeID} = useParams();
    const [sections,setSections] = useState([]);


    const getsectionsbyCourse_id = async () => {
        const res = await axios.get(`http://localhost:3000/lib/CourseSections?_id=${courseid}`)
        .catch((err) => console.log(err));
        const data = await res.data;
        return data;
        
      };

      const downloadCertificateandsendViaEmail = async () => {
        const res = await axios.post("http://localhost:3000/trainee/getCertificate",{
          trainee_id:traineeID
        })
        .catch((err) => console.log(err));
        const data = await res.data;
        console.log(data)

        return data;
        
      };  

      useEffect(() =>{
        getsectionsbyCourse_id().then((data) => setSections(data))
    
      },[]);

    const handleClick=(e)=>{
      e.preventDefault()

      downloadCertificateandsendViaEmail().then((data) => console.log(data));
      
    }



  return (
    <div>
        <TraineeNavbar/>

        <Progress_bar bgcolor="#99ff66" progress='80'  height={30} />
        <div className="sectionPage_comp">

        {sections && sections.map((section) =>(
          <SectionCard section={section} traineeID={traineeID}/>
        ))}
            
        </div>

    <button className='button1' onClick={handleClick}>
          Recieve Certificate
     </button>


    <a href="/Certificate.pdf" 
            download ="/Certificate.pdf" >
            <button className="button1"  > Download certificate</button>
          </a>
    


    </div>  
  )
}
