import React from 'react';
import './MenteeProfile.css'; // Import the CSS file for styling

function MenteeProfile() {
  return (
    <div className="mentee-profile">
      <h2>Mentee Profile</h2>
      <div className="profile-info">
        <p><strong>Name:</strong> Jane Smith</p>
        <p><strong>Email:</strong> jane.smith@example.com</p>
        <p><strong>Interests:</strong> Machine Learning, Web Development</p>
      </div>
    </div>
  );
}

export default MenteeProfile;