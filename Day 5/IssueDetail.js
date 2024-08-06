// src/components/IssueDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/IssueDetail.css';

const issues = [
  { id: 'engine', title: 'Engine Issues', description: 'Common problems and solutions for engine-related issues.', image: 'path/to/engineImage.jpg' },
  { id: 'brake', title: 'Brake Problems', description: 'How to diagnose and fix brake issues.', image: 'path/to/brakeImage.jpg' },
  // Add the remaining issues with their respective ids
];

const IssueDetail = () => {
  const { issueId } = useParams();
  const issue = issues.find(issue => issue.id === issueId);

  return (
    <div className="issue-detail-container">
      {issue ? (
        <>
          <h2>{issue.title}</h2>
          <img src={issue.image} alt={issue.title} />
          <p>{issue.description}</p>
        </>
      ) : (
        <p>Issue not found.</p>
      )}
    </div>
  );
};

export default IssueDetail;
