import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import './Home.css'; // Import the CSS file for styling

function Home() {
  const navigate = useNavigate(); // Create navigate function

  const handleGetStarted = () => {
    navigate('/login'); // Redirect to the login page or any other page
  };

  return (
    <div className="home-container">
      <div className="home-header">
        <h1>Welcome to MentorConnect</h1>
        <p>Your platform for connecting with mentors and mentees.</p>
        <button className="get-started-btn" onClick={handleGetStarted}>
          Get Started
        </button>
      </div>
      <div className="home-features">
        <h2>Features</h2>
        <div className="features-grid">
          <div className="feature-item">
            <h3>Find Mentors</h3>
            <p>Discover and connect with mentors across various fields.</p>
          </div>
          <div className="feature-item">
            <h3>Track Progress</h3>
            <p>Monitor your growth and achievements with detailed analytics.</p>
          </div>
          <div className="feature-item">
            <h3>Manage Profile</h3>
            <p>Update your profile and manage your connections easily.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;