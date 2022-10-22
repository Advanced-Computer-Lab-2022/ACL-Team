
import { Link } from 'react-router-dom';

export default function NavAll () {
        return(
        <div>
            <div className="Navbar">
                <Link to="/" className="Title">
                    <h1>EduBay</h1>
                </Link>

                <Link to="/User" className="SignIN">
                    <button className="SignInButton">userPage</button>                
                </Link>

                <Link to="/Course">
                    <button className="SignUpButton">coursePage</button>                
                </Link>
                <Link to="/Instructor">
                    <button>instructorPage</button>                
                </Link>
               
            </div>            
        </div>
        )
    
}