import React from 'react';
import './UserStats.css';

const UserStats = ({ stats }) => {
  return (
    <div className="user-stats">
      <h1>User Statistics</h1>
      <div className="stats-details">
        <div className="stat-item">
          <h3>Total Workouts</h3>
          <p>{stats.totalWorkouts}</p>
        </div>
        <div className="stat-item">
          <h3>Calories Burned</h3>
          <p>{stats.caloriesBurned}</p>
        </div>
        <div className="stat-item">
          <h3>Average Duration</h3>
          <p>{stats.averageDuration}</p>
        </div>
      </div>
    </div>
  );
};

export default UserStats;
