import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

// Dummy Components for demonstration
const Dashboard = () => <h2>Dashboard</h2>;
const Profile = () => <h2>Profile Page</h2>;
const Navbar = () => <h2>Navbar</h2>;
const Home = () => <h2>Home</h2>;
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
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
