/*import React from 'react';
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

export default WorkoutCard;*/



import React from 'react';
import './WorkoutCard.css';

const WorkoutCard = ({ workout }) => {
  return (
    <div className="workout-card">
      <img src={workout.imageUrl} alt={workout.name} className="workout-image" />
      <h2>{workout.name}</h2>
      <p>Difficulty: {workout.difficulty}</p>
      <p>Type: {workout.type}</p>
      <p>Goal: {workout.goal}</p>
      <p>Schedule: {workout.schedule.join(', ')}</p>
      <p>Creation Date: {new Date(workout.creationDate).toLocaleDateString()}</p>
    </div>
  );
};

export default WorkoutCard;





