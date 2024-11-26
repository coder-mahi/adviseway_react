import React,{useState} from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
function Navbar(){
    const [isLoggedIn,setIsLoggedIn] = useState(false);
    const handleLogout = ()=>{
        setIsLoggedIn(false);
    };
    return (
        <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          {isLoggedIn?(
            <>
            <li>
                <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
                <Link to="/profile">Profile</Link>
            </li>
            <li>
                <button onClick={handleLogout} className="logout-btn">
                    Logout
                </button>
            </li>
            </>
          ):(
            <>
            <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
            </>
          )}
        </ul>
      </nav>
    )
}
export default Navbar;