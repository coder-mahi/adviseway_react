import React from 'react';
import './Dashboard.css'; // Import the CSS file for styling

function Dashboard() {
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Admin Dashboard</h1>
      </header>
      <main className="dashboard-main">
        <section className="overview">
          <h2>Overview</h2>
          <div className="card">
            <h3>Total Users</h3>
            <p>1,245</p>
          </div>
          <div className="card">
            <h3>Active Sessions</h3>
            <p>76</p>
          </div>
        </section>
        <section className="recent-activities">
          <h2>Recent Activities</h2>
          <ul>
            <li>User JohnDoe logged in</li>
            <li>New mentor registration</li>
            <li>Profile updated for JaneDoe</li>
          </ul>
        </section>
        <section className="user-statistics">
          <h2>User Statistics</h2>
          <div className="chart">
            {/* Placeholder for a chart or graph */}
            <p>Chart placeholder</p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;
