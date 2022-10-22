
import { Link } from 'react-router-dom';

export default function Navbar () {
        return(
        <div>
            <div className="Navbar">
                <Link to="/" className="Title">
                    <h1>EduBay</h1>
                </Link>

                <Link to="/SignIn" className="SignIN">
                    <button className="SignInButton">Sign In</button>                
                </Link>

                <Link to="/">
                    <button className="SignUpButton">Sign Up</button>                
                </Link>
            </div>            
        </div>
        )
    
}