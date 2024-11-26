import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Use useNavigate for navigation
import './Home.css'; // Optional: Import CSS for styling if required

const Home = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate(); // For navigation

  useEffect(() => {
    // Simulate checking if user is logged in (Replace this with actual authentication logic)
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser")); // Check if there's a logged-in user in local storage

    if (loggedInUser) {
      setUser(loggedInUser);
    }
  }, []);

  // If the user is not logged in, show the login/signup buttons
  if (!user) {
    return (
      <div className="home-container">
        <h1>Welcome to Our Platform!</h1>
        <p>
          Our platform connects mentors and mentees for personal and professional growth. Get started by logging in or signing up!
        </p>
        <div className="button-container">
          <button 
            className="login-button" 
            onClick={() => navigate('/login')} // Navigate to login page
          >
            Login
          </button>
          <button 
            className="signup-button" 
            onClick={() => navigate('/register')} // Navigate to signup page
          >
            Sign Up
          </button>
        </div>
      </div>
    );
  }

  // If the user is logged in, show their details (This is a placeholder for after login)
  return (
    <div className="home-container">
      <h1>Welcome Back, {user.name}</h1>
      <p>Email: {user.email}</p>
      <p>Role: {user.role}</p>
    </div>
  );
};

export default Home;
