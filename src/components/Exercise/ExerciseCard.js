import React from 'react';
import './ExerciseCard.css';

const ExerciseCard = ({ exercise }) => {
  return (
    <div className="exercise-card">
      <img src={exercise.image} alt={exercise.name} className="exercise-image" />
      <h3>{exercise.name}</h3>
      <p>{exercise.repeats} repeats</p>
    </div>
  );
};

export default ExerciseCard;
