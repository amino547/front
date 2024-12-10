import React, { useState } from 'react';
import ExerciseList from '../components/Exercise/ExerciseList';
import ExerciseCard from '../components/Exercise/ExerciseCard';

import './ExercisePage.css';

import pushupsImage from '../assets/images/pushups.jpg';
import pullupsImage from '../assets/images/pullups.jpg';
import squatsImage from '../assets/images/squats.jpg';
import plankImage from '../assets/images/plank.jpg';

const exercises = [
  { name: 'Push-ups', image: pushupsImage, repeats: 10 },
  { name: 'Pull-ups', image: pullupsImage, repeats: 8 },
  { name: 'Squats', image: squatsImage, repeats: 15 },
  { name: 'Plank', image: plankImage, repeats: 1 },
];

const ExercisePage = () => {
  const [view, setView] = useState('list');

  return (
    <div className="exercise-page2">
      <h1>Exercise Dashboard</h1>
      <div className="navigation2">
        <button onClick={() => setView('list')} className={view === 'list' ? 'active' : ''}>
          List View
        </button>
        <button onClick={() => setView('card')} className={view === 'card' ? 'active' : ''}>
          Card View
        </button>
      </div>
      
      {view === 'list' && <ExerciseList exercises={exercises} />}
      {view === 'card' && (
        <div className="exercise-cards2">
          {exercises.map((exercise, index) => (
            <ExerciseCard key={index} exercise={exercise} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ExercisePage;



