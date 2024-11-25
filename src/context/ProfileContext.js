// src/context/ProfileContext.js

import React, { createContext, useState } from 'react';

// Create a context for profile data
const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  const [profile, setProfile] = useState(null);

  // Example function to update profile data
  const updateProfile = (newProfileData) => {
    setProfile(newProfileData);
  };

  return (
    <ProfileContext.Provider value={{ profile, updateProfile }}>
      {children}
    </ProfileContext.Provider>
  );
};

export default ProfileContext;
