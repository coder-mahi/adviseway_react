// src/context/ProfileContext.js
import React, { createContext, useState } from 'react';

// Create the Profile Context
export const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    role: '',
    bio: ''
  });
  const [authenticatedUser, setAuthenticatedUser] = useState(null);

  const updateProfile = (newProfile) => {
    setProfile(newProfile); // Directly update the profile with new data
  };

  const registerUser = (userData) => {
    // Save registered user data
    localStorage.setItem('registeredUser', JSON.stringify(userData));
    setProfile(userData); // Update profile with registration data
  };

  const loginUser = (email, password) => {
    const storedUser = JSON.parse(localStorage.getItem('registeredUser'));
    if (storedUser && storedUser.email === email && storedUser.password === password) {
      setAuthenticatedUser(storedUser);
      setProfile(storedUser); // Update profile on login
      return true;
    }
    return false;
  };

  const logoutUser = () => {
    setAuthenticatedUser(null);
    setProfile({
      name: '',
      email: '',
      role: '',
      bio: ''
    });
  };

  return (
    <ProfileContext.Provider value={{ profile, updateProfile, registerUser, loginUser, logoutUser, authenticatedUser }}>
      {children}
    </ProfileContext.Provider>
  );
};
