/*import React, { useState } from 'react';
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

export default ExercisePage;*/


import React, { useContext, useState, useEffect } from 'react';
import { ExerciseContext } from '../context/ExerciseContext';
import axios from 'axios';
import ExerciseList from '../components/Exercise/ExerciseList';
import ExerciseCard from '../components/Exercise/ExerciseCard';
import './ExercisePage.css';

const ExercisePage = () => {
  const { state, dispatch } = useContext(ExerciseContext);
  const [view, setView] = useState('list');

  useEffect(() => {
    const fetchExercises = async () => {
      try {
        const response = await axios.get('http://localhost:5000/exercises');
        dispatch({ type: 'SET_EXERCISES', payload: response.data });
      } catch (error) {
        console.error('Error fetching exercises:', error);
      }
    };

    fetchExercises();
  }, [dispatch]);

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

      {view === 'list' && <ExerciseList exercises={state.exercises} />}
      {view === 'card' && (
        <div className="exercise-cards2">
          {state.exercises.map((exercise, index) => (
            <ExerciseCard key={index} exercise={exercise} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ExercisePage;









