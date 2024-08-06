// src/components/SignupPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/SignupPage.css';

const SignupPage = ({ setUser }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    // Dummy signup logic; replace with actual signup logic
    const newUser = { name, email };
    setUser(newUser);
    navigate('/login');
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSignup}>
        <h2 className="signup-title">Signup</h2>
        <div className="form-group">
          <input
            type="text"
            className="form-field"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            className="form-field"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-field"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
        </div>
        <button type="submit" className="submit-button">Signup</button>
      </form>
    </div>
  );
};

export default SignupPage;
