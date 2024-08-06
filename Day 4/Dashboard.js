// src/components/Dashboard.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Dashboard.css';

const Dashboard = ({ user }) => {
  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <h2>Menu</h2>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/landing-board">Explore Guides</Link>
          </li>
          <li>
            <Link to="/profile">User Profile</Link>
          </li>
          <li>
            <Link to="/garages">NearBy Garages</Link>
          </li>
        </ul>
      </aside>
      <main className="dashboard-content">
        <header className="dashboard-header">
          <h1>Hub Dashboard</h1>
          <input type="text" className="search-bar" placeholder="Search..." />
        </header>
        <section className="dashboard-summary">
          <div className="summary-card">
            <h2>Total Reviews</h2>
            <p>110,456</p>
          </div>
          <div className="summary-card">
            <h2>Positive Reviews</h2>
            <p>99,678</p>
          </div>
          <div className="summary-card">
            <h2>Negative Reviews</h2>
            <p>10,778</p>
          </div>
        </section>
        <section className="dashboard-details">
          <h2>Recent Viewed Activities</h2>
          <ul>
            <li>ENGINE ISSUES : 33%</li>
            <li>BREAK PROBLEMS: 27%</li>
            <li>TRANSMISSION TROUBLES: 14%</li>
            <li>ELECTRICAL ISSUES: 9%</li>
            <li>OTHERS: 17%</li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
