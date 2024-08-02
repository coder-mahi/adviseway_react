// src/components/Profile/Profile.js
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { ProfileContext } from '../../context/ProfileContext'; 
import './Profile.css'; 

function Profile() {
  const navigate = useNavigate(); 
  const { profile } = useContext(ProfileContext); 

  const handleEditProfile = () => {
    navigate('/edit-profile'); 
  };

  const handleDashboardNavigation = () => {
    if (profile.role === 'mentor') {
      navigate('/mentor-dashboard');
    } else if (profile.role === 'mentee') {
      navigate('/mentee-dashboard');
    } else if (profile.role === 'admin') {
      navigate('/admin-dashboard');
    }
  };

  return (
    <div className="profile-container">
      <h2>My Profile</h2>
      <div className="profile-details">
        <div className="profile-field">
          <label>Username:</label>
          <p>{profile.name}</p>
        </div>
        <div className="profile-field">
          <label>Email:</label>
          <p>{profile.email}</p>
        </div>
        <div className="profile-field">
          <label>Role:</label>
          <p>{profile.role}</p>
        </div>
        <div className="profile-field">
          <label>Bio:</label>
          <p>{profile.bio}</p>
        </div>
        <div className="profile-actions">
          <button onClick={handleEditProfile}>Edit Profile</button>
          <button onClick={handleDashboardNavigation}>Go to Dashboard</button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
