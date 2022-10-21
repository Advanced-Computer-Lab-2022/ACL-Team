
import { useEffect, useState} from 'react';



const Home = () => {
    const[courseRouter, setCourses] = useState(null) //make sure of the variables

    useEffect(() => {
        const fetchCourses = async () => {
            const response = await fetch('/courseRouter')
            const json = await response.json()

            if(response.ok){
                setCourses(json)
            }
        }

        fetchCourses()
    }, [])
    
    return(
        <div className="homePage">
            <div className="courses">
                {courseRouter && courseRouter.map((courseRouter) => (
                    <p key={courseRouter._id}>{courseRouter.title}</p>
                ))}
            </div> 
            <button className='UserButton'><a href='frontend/src/pages/User'>UserPage</a></button>
            <button className='CourseButton'><a href='frontend/src/pages/Course'>Select_Course</a></button>                 
        </div>
    ) 
}

export default Home