import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ProtectedRoute from './components/common/ProtectedRoute'; // Import the ProtectedRoute

// Dummy Components for demonstration
const Home = () => <h2>Home Page</h2>;
const Login = () => <h2>Login Page</h2>;
const Register = () => <h2>Register Page</h2>;
const AdminDashboard = () => <h2>Admin Dashboard</h2>;
const MentorDashboard = () => <h2>Mentor Dashboard</h2>;
const MenteeDashboard = () => <h2>Mentee Dashboard</h2>;
const Profile = () => <h2>Profile Page</h2>;

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navigation */}
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          </ul>
        </nav>

        <main>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

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
