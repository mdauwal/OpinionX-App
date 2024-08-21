import React from 'react';
import './Card.css';

const Card = () => {
  const buttons = Array.from({ length: 10 }, (_, i) => i + 1);

  return (
    <div className="card">
      {buttons.map((number) => (
        <button key={number} className="btn">
          {number}
        </button>
      ))}
    </div>
  );
};

export default Card;
