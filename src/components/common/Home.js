import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Home.css";

function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); 

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="home-page">
      {isLoggedIn ? (
        <div>
          <h1>Welcome Back, User!</h1>
          <p>We're glad to see you again. Here are some options for you:</p>
          <ul>
            <li>
              <Link to="/profile">Go to Profile</Link>
            </li>
            <li>
              <Link to="/dashboard">Go to Dashboard</Link>
            </li>
            <li>
              <button onClick={handleLogout}>Logout
                </button>
            </li>
          </ul>
        </div>
      ) : (
        <div>
          <h1>Welcome to Our Website!</h1>
          <p>Please log in to access your profile and dashboard.</p>
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
}

export default Home;
