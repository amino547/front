import React from 'react';
import './WorkoutCard.css';

const WorkoutCard = ({ workout }) => {
  return (
    <div className="workout-card">
      <h2>{workout.name}</h2>
      <p>Duration: {workout.duration} min</p>
      <p>Calories Burned: {workout.caloriesBurned}</p>
      <p>Date: {workout.date}</p>
    </div>
  );
};

export default WorkoutCard;


