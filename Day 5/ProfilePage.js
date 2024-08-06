// src/components/ProfilePage.js
import React from 'react';
import '../styles/ProfilePage.css';

const ProfilePage = ({ user }) => {
  return (
    <div className="profile-page-container">
      <h2>Profile</h2>
      {user ? (
        <div>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
        </div>
      ) : (
        <p>No user logged in.</p>
      )}
    </div>
  );
};

export default ProfilePage;
