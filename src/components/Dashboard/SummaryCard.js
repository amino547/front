import React from 'react';
import './SummaryCard.css';

const SummaryCard = ({ title, value }) => {
  return (
    <div className="summary-card">
      <h2>{title}</h2>
      <p>{value}</p>
    </div>
  );
};

export default SummaryCard;
