import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazyload';
import '../styles/Homepage.css';

const issues = [
  { id: 'engine', title: 'Engine Issues', description: 'Common problems and solutions for engine-related issues.', className: 'card-engine' },
  { id: 'brake', title: 'Brake Problems', description: 'How to diagnose and fix brake issues.', className: 'card-brake' },
  { id: 'transmission', title: 'Transmission Troubles', description: 'Identifying and repairing transmission problems.', className: 'card-transmission' },
  { id: 'suspension', title: 'Suspension System', description: 'Guide to fixing suspension system issues.', className: 'card-suspension' },
  { id: 'electrical', title: 'Electrical Issues', description: 'Solving electrical problems in vehicles.', className: 'card-electrical' },
  { id: 'cooling', title: 'Cooling System', description: 'Maintaining and repairing the cooling system.', className: 'card-cooling' },
  { id: 'fuel', title: 'Fuel System', description: 'Common fuel system issues and their fixes.', className: 'card-fuel' },
  { id: 'exhaust', title: 'Exhaust System', description: 'Diagnosing and repairing exhaust system problems.', className: 'card-exhaust' },
  { id: 'steering', title: 'Steering Issues', description: 'Identifying and solving steering problems.', className: 'card-steering' },
  { id: 'tires', title: 'Tires and Wheels', description: 'Resolving the issues concerned with wheels.', className: 'card-tires' },
];

const Homepage = () => {
  return (
    <div className="homepage-container">
      <header className="homepage-header">
        <h1>Welcome to Vehicle Repair Hub</h1>
        <p>Your go-to platform for all vehicle repair needs. Here you can find comprehensive guides and tips to fix common vehicle issues.</p>
      </header>
      <main className="homepage-content">
        <section className="issues-grid">
          {issues.map((issue, index) => (
            <LazyLoad height={200} offset={100} key={index}>
              <Link to={`/issue/${issue.id}`} className={`card ${issue.className}`}>
                <h3>{issue.title}</h3>
                <p>{issue.description}</p>
              </Link>
            </LazyLoad>
          ))}
        </section>
      </main>
      <footer className="homepage-footer">
        <p>Contact us at: +91 7339331134</p>
        <div className="social-links">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </footer>
    </div>
  );
};

export default memo(Homepage);
