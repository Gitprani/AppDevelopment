// src/components/Garages.js
import React from 'react';
import '../styles/Garages.css';

const garages = [
  { name: 'Nidar\'s Garage', address: '123 Main St, Kodaiyur, Karur' },
  { name: 'FixIt Vehicle Repairs', address: '456 Elm St, Kovaipudur  , Kovai' },
  { name: 'NDurai Mechanics', address: '789 Oak St, Ottanchattiram, Dindigal' },
];

const Garages = () => {
  return (
    <div className="garages-container">
      <h2>Nearby Garages</h2>
      <ul>
        {garages.map((garage, index) => (
          <li key={index} className="garage-item">
            <h3>{garage.name}</h3>
            <p>{garage.address}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Garages;
