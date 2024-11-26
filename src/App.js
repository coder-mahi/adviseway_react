import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ProtectedRoute from './components/common/ProtectedRoute'; // Import the ProtectedRoute
import Navbar from './components/common/Navbar';
import Login from './auth/pages/Login';
import Register from './auth/pages/Register';
import Home from './components/common/Home';
import Profile from './components/common/Profile';
import Dashboard from './auth/pages/Dashboard';
// Dummy Components for demonstration
const AdminDashboard = () => <h2>Admin Dashboard</h2>;
const MentorDashboard = () => <h2>Mentor Dashboard</h2>;
const MenteeDashboard = () => <h2>Mentee Dashboard</h2>;

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <main>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />

            {/* Protected Routes */}
            <Route 
              path="/admin-dashboard" 
              element={<ProtectedRoute role="admin"><AdminDashboard /></ProtectedRoute>} 
            />
            <Route 
              path="/mentor-dashboard" 
              element={<ProtectedRoute role="mentor"><MentorDashboard /></ProtectedRoute>} 
            />
            <Route 
              path="/mentee-dashboard" 
              element={<ProtectedRoute role="mentee"><MenteeDashboard /></ProtectedRoute>} 
            />
            <Route 
              path="/profile" 
              element={<ProtectedRoute role="user"><Profile /></ProtectedRoute>} 
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
