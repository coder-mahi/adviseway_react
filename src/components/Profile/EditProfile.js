import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { ProfileContext } from '../../context/ProfileContext'; // Correct path
import './EditProfile.css'; // Import the CSS file for styling

function EditProfile() {
  const { profile, updateProfile } = useContext(ProfileContext); // Use context
  const [formData, setFormData] = useState(profile);
  const navigate = useNavigate(); // Create navigate function

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProfile(formData); // Update context with new profile data

    // Navigate to appropriate dashboard based on role
    if (formData.role === 'mentor') {
      navigate('/mentor-dashboard');
    } else if (formData.role === 'mentee') {
      navigate('/mentee-dashboard');
    } else if (formData.role === 'admin') {
      navigate('/admin-dashboard');
    } else {
      navigate('/profile'); // Fallback if no role matches
    }
  };

  return (
    <div className="container">
      <h2>Edit Profile</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Role</label>
          <div className="role-options">
            <div className="role-option">
              <input
                type="radio"
                id="mentor"
                name="role"
                value="mentor"
                checked={formData.role === 'mentor'}
                onChange={handleChange}
              />
              <label htmlFor="mentor">Mentor</label>
            </div>
            <div className="role-option">
              <input
                type="radio"
                id="mentee"
                name="role"
                value="mentee"
                checked={formData.role === 'mentee'}
                onChange={handleChange}
              />
              <label htmlFor="mentee">Mentee</label>
            </div>
            <div className="role-option">
              <input
                type="radio"
                id="admin"
                name="role"
                value="admin"
                checked={formData.role === 'admin'}
                onChange={handleChange}
              />
              <label htmlFor="admin">Admin</label>
            </div>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="bio">Bio</label>
          <input
            type="text"
            id="bio"
            name="bio"
            value={formData.bio}
            onChange={handleChange}
          />
        </div>
        <div className="button-container">
          <button type="submit">Save Changes</button>
        </div>
      </form>
    </div>
  );
}

export default EditProfile;
