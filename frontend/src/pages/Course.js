import { useEffect,useState } from "react";
import CourseCard from "../components/Course/courseCard";
import CourseNav from "../components/Course/CourseNav";

export default function Course(){
    const[courses, setCourses] = useState(null) 

    useEffect(() => {
        const fetchCourses = async () => {
            const response = await fetch('http://localhost:3000/courseRouter')
            const json = await response.json()

            if(response.ok){
                setCourses(json)
            }
        }

        fetchCourses()
    }, [])
    
    return(
           <div className="coursePage">
            <CourseNav/>
            <CourseCard/>
            {/* {courses && courses.map((course) => (<CourseCard />))} */}
           </div>
       )
}
   
