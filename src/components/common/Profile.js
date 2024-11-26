import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Use useNavigate instead of useHistory
import './Profile.css'; // Optional: Import CSS for styling if required.

const Profile = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate(); // For navigation

  useEffect(() => {
    // Simulate fetching user data. Replace this with an actual API call.
    const fetchUser = async () => {
      // Example of a hardcoded user object for logged-in users
      const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser")); // Replace with your actual logic

      if (loggedInUser) {
        setUser(loggedInUser);
      }
    };

    fetchUser();
  }, []);

  if (!user) {
    return (
      <div className="profile-container">
        <h1>Welcome to Our Platform!</h1>
        <p>Our platform helps you connect with mentors and mentees for personal and professional growth.</p>
        <p>Get started by logging in or signing up!</p>
        <div>
          <button 
            className="login-button" 
            onClick={() => navigate('/login')} // Navigate to the login page
          >
            Login
          </button>
          <button 
            className="signup-button" 
            onClick={() => navigate('/signup')} // Navigate to the signup page
          >
            Sign Up
          </button>
        </div>
      </div>
    );
  }

  // If the user is logged in, show their profile details
  return (
    <div className="profile-container">
      <h1>Welcome, {user.name}</h1>
      <p>Email: {user.email}</p>
      <p>Role: {user.role}</p>
      <button 
        className="logout-button" 
        onClick={() => {
          // Clear user session and redirect to login
          localStorage.removeItem("loggedInUser"); // Remove logged-in user data from storage
          setUser(null); 
          navigate('/login'); // Redirect to login page
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Profile;
