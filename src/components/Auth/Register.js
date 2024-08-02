// src/components/Register/Register.js
import React, { useState, useContext } from 'react';
import { ProfileContext } from '../../context/ProfileContext'; 
import { useNavigate } from 'react-router-dom'; 
import './Register.css'; 

function Register() {
  const { registerUser } = useContext(ProfileContext); 
  const navigate = useNavigate(); 

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    registerUser({
      name: formData.name,
      email: formData.email,
      password: formData.password,
      role: formData.role,
      bio: '' 
    });
    navigate('/login');
  };

  return (
    <div className="container">
      <h2>Register</h2>
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
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
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
          </div>
        </div>
        <div className="button-container">
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  );
}

export default Register;
