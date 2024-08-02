import React from 'react';
import './MentorProfile.css'; // Import the CSS file for styling

function MentorProfile() {
  return (
    <div className="mentor-profile">
      <h2>Mentor Profile</h2>
      <div className="profile-info">
        <p><strong>Name:</strong> John Doe</p>
        <p><strong>Email:</strong> john.doe@example.com</p>
        <p><strong>Specialization:</strong> Software Development</p>
      </div>
    </div>
  );
}

export default MentorProfile;
