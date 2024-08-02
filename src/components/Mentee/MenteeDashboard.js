import React from 'react';
import './MenteeDashboard.css'; // Import the CSS file for styling

function MenteeDashboard() {
  return (
    <div className="mentee-dashboard">
      <header className="dashboard-header">
        <h1>Mentee Dashboard</h1>
      </header>
      <main className="dashboard-main">
        <section className="mentorship-progress">
          <h2>Your Progress</h2>
          <div className="progress-card">
            <h3>Current Projects</h3>
            <p>3</p>
          </div>
        </section>
        <section className="mentor-reviews">
          <h2>Mentor Reviews</h2>
          <ul>
            <li>Mentor Alex: Insightful sessions on data science</li>
            <li>Mentor Emma: Excellent guidance on career growth</li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default MenteeDashboard;
