//import { useEffect, useState } from "react"
// import { Link } from "react-router-dom"
// import CourseBye from "../components/Course/CourseBye"
// import CourseHome from "../components/Course/CourseHome"
//import CourseNav from "../components/Course/CourseNav"
import Welcome from "../components/Home/Welcome"
//import Navbar from "../components/Navbar"
import Navbar2 from "../components/NavBar2"

export default function Home(){

    //  let [x,setX] =useState(5);
    //  let [y,setY] =useState(19);
    //  let[id,setId]=useState(null);

    

    //  useEffect(() => {
    //     fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    //     .then((response) => response.json())
    //     .then((json) => {
    //         let {id}=json;
    //         setId(id);
    //     });
    //  },[])




    return(
           <div className="coursePage">
            {/* <h1>{id}</h1> */}
    
            {/* <h1>{y}</h1> */}
            
               {/* <CourseHome></CourseHome> */}
               {/* <button onClick={()=>{setX(x++)}}>IncrementX</button> */}
               {/* <button onClick={()=>{setY(y++)}}>IncrementY</button> */}

                {/* <Link to={'/Zew'}>
               <button >GO TO ZEW</button>
                </Link> */}

                {/* <CourseBye/> */}

                <Navbar2 />
                <Welcome/>                

           </div>
       )
}
   
