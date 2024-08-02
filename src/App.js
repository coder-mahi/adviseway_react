import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Home from './pages/Home';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Profile from './components/Profile/Profile';
import EditProfile from './components/Profile/EditProfile';
import Dashboard from './components/Admin/Dashboard';
import AdminDashboard from './pages/AdminDashboard';
import MentorDashboard from './components/Mentor/MentorDashboard';
import MentorProfile from './components/Mentor/MentorProfile';
import MenteeDashboard from './components/Mentee/MenteeDashboard';
import MenteeProfile from './components/Mentee/MenteeProfile';
import { ProfileProvider } from './context/ProfileContext';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
        <ProfileProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/edit-profile" element={<EditProfile />} />
            <Route path="/home" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/admin-dashboard" element={<AdminDashboard />} />

            <Route path="/mentor-dashboard" element={<MentorDashboard />} />
            <Route path="/mentor-profile" element={<MentorProfile />} />
            <Route path="/mentee-dashboard" element={<MenteeDashboard />} />
            <Route path="/mentee-profile" element={<MenteeProfile />} />

          </Routes>
          </ProfileProvider>

        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
