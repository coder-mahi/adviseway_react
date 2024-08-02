// src/components/Login/Login.js
import React, { useState, useContext } from 'react';
import { ProfileContext } from '../../context/ProfileContext'; 
import { useNavigate } from 'react-router-dom'; 
import './Login.css'; 

function Login() {
  const { loginUser } = useContext(ProfileContext); 
  const navigate = useNavigate(); 

  const [formData, setFormData] = useState({
    email: '',
    password: ''
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
    const isLoggedIn = loginUser(formData.email, formData.password);
    if (isLoggedIn) {
      navigate('/profile'); 
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
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
        <div className="button-container">
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
