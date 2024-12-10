import React from 'react';
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

export default WorkoutList;



