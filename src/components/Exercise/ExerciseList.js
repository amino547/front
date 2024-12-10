import React from 'react';
import ExerciseCard from './ExerciseCard';
import ExerciseAnalysis from './ExerciseAnalysis';
import './ExerciseList.css';
import pushupsImage from '../image/pushups.webp';
import pullupsImage from '../image/pullups.jpg';
import squatsImage from '../image/squats.jpg'

const exercises = [
  { name: 'Push-ups', image: pushupsImage, repeats: 10 },
  { name: 'Pull-ups', image: pullupsImage, repeats: 8 },
  { name: 'Squats', image: squatsImage, repeats: 15 },
  
  
];

const ExerciseList = () => {
  return (
    <div className="exercise-list">
      <ExerciseAnalysis />
      {exercises.map((exercise, index) => (
        <ExerciseCard key={index} exercise={exercise} />
      ))}
    </div>
  );
};

export default ExerciseList;





