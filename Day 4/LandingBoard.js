import React from 'react';
import '../styles/LandingBoard.css';

const LandingBoard = () => {
  return (
    <div className="landing-board-container">
      <header className="landing-board-header">
        <h1>Vehicle Repair Guide</h1>
        <p>Your comprehensive resource for all vehicle repair needs. Explore guides, tips, and expert advice to keep your vehicle in top condition.</p>
      </header>
      <main className="landing-board-content">
        <section className="intro-section">
          <h2>Getting Started</h2>
          <p>Welcome to the Vehicle Repair Guide. Whether you're a seasoned mechanic or a DIY enthusiast, our resources will help you tackle common repairs and maintenance tasks with confidence.</p>
        </section>
        <section className="common-repairs-section">
          <h2>Common Repairs</h2>
          <ul>
            <li><strong>Oil Change:</strong> A regular oil change keeps your engine running smoothly. Learn how to replace the oil and filter in just a few easy steps.</li>
            <li><strong>Brake Replacement:</strong> Discover how to replace brake pads and rotors to ensure your vehicle stops safely and efficiently.</li>
            <li><strong>Battery Maintenance:</strong> Keep your battery in top condition with our tips on testing, cleaning, and replacing it when needed.</li>
          </ul>
        </section>
        <section className="advanced-tips-section">
          <h2>Advanced Tips</h2>
          <p>Explore advanced techniques and troubleshooting tips to enhance your vehicle's performance. From tuning your engine to diagnosing complex electrical issues, we've got you covered.</p>
          <ul>
            <li><strong>Engine Tuning:</strong> Learn how to optimize your engine's performance with tuning and calibration techniques.</li>
            <li><strong>Diagnostic Tools:</strong> Discover the best diagnostic tools and software for troubleshooting modern vehicle electronics.</li>
            <li><strong>Suspension Upgrades:</strong> Explore suspension upgrades to improve your vehicle's handling and comfort.</li>
          </ul>
        </section>
        <section className="safety-tips-section">
          <h2>Safety Tips</h2>
          <p>Safety is paramount in any repair job. Follow these guidelines to ensure a safe and efficient repair process.</p>
          <ul>
            <li><strong>Use the Right Tools:</strong> Always use the correct tools for the job to avoid injury and ensure quality work.</li>
            <li><strong>Wear Protective Gear:</strong> Safety glasses, gloves, and other protective gear are essential when working on your vehicle.</li>
            <li><strong>Follow Manufacturer Guidelines:</strong> Refer to your vehicle’s manual for specific repair instructions and safety precautions.</li>
          </ul>
        </section>
        <section className="troubleshooting-section">
          <h2>Troubleshooting Guide</h2>
          <p>Having trouble with your vehicle? Check out our troubleshooting guide to find quick solutions to common problems.</p>
          <ul>
            <li><strong>Engine Won't Start:</strong> Common causes and fixes for a vehicle that won't start.</li>
            <li><strong>Overheating Issues:</strong> Diagnose and solve overheating problems to avoid engine damage.</li>
            <li><strong>Strange Noises:</strong> Identify and address unusual noises coming from your vehicle.</li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default LandingBoard;
