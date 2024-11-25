// src/components/common/ProtectedRoute.js

import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, role }) => {
  const user = JSON.parse(localStorage.getItem('user')); // Fetch user from localStorage

  if (!user || user.role !== role) {
    // Redirect to login page if no user or role doesn't match
    return <Navigate to="/login" />;
  }

  return children; // If user is authorized, render the protected route
};

export default ProtectedRoute;
