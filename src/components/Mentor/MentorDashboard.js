import React from 'react';
import './MentorDashboard.css'; // Import the CSS file for styling

function MentorDashboard() {
  return (
    <div className="mentor-dashboard">
      <header className="dashboard-header">
        <h1>Mentor Dashboard</h1>
      </header>
      <main className="dashboard-main">
        <section className="mentor-info">
          <h2>Your Mentoring</h2>
          <div className="info-card">
            <h3>Active Mentees</h3>
            <p>5</p>
          </div>
        </section>
        <section className="mentee-feedback">
          <h2>Mentee Feedback</h2>
          <ul>
            <li>John Doe: Great insights on career development</li>
            <li>Jane Smith: Helpful advice on project management</li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default MentorDashboard;
