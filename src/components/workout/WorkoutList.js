/*import React from 'react';
import WorkoutCard from './WorkoutCard';
import './WorkoutList.css';

const WorkoutList = ({ workouts }) => {
  return (
    <div className="workout-list">
      <h1>Workout List</h1>
      <div className="workout-cards">
        {workouts.map((workout, index) => (
          <WorkoutCard key={index} workout={workout} />
        ))}
      </div>
    </div>
  );
};

export default WorkoutList;*/


// WorkoutList.js
import React from 'react';
import WorkoutCard from './WorkoutCard';
import './WorkoutList.css';

const WorkoutList = ({ workouts, onDelete }) => {
  return (
    <div className="workout-list">
      <h1>Workout List</h1>
      <div className="workout-cards">
        {workouts.map((workout) => (
          <div key={workout._id} className="workout-item">
            <WorkoutCard workout={workout} />
            <button onClick={() => onDelete(workout._id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkoutList;







