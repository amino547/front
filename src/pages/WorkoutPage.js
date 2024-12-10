import React, { useState } from 'react';
import WorkoutList from '../components/workout/WorkoutList';
import WorkoutForm from '../components/workout/WorkoutFrom';
import WorkoutCard from '../components/workout/WorkoutCard';
import './WorkoutPage.css';

const WorkoutPage = () => {
  const [workouts, setWorkouts] = useState([
    { name: 'Running', duration: 30, caloriesBurned: 300, date: '2023-10-01' },
    { name: 'Cycling', duration: 45, caloriesBurned: 450, date: '2023-10-02' },
    { name: 'Traditional reinforcement', duration: 50, caloriesBurned: 500, date: '2023-10-03'},
  ]);

  const [activeSection, setActiveSection] = useState('list');

  const handleAddWorkout = (newWorkout) => {
    setWorkouts([...workouts, newWorkout]);
  };

  return (
    <div className="workout-page">
      <h1>Workout Tracker</h1>
      <div className="navigation">
        <button
          onClick={() => setActiveSection('form')}
          className={activeSection === 'form' ? 'active' : ''}
        >
          Add Workout
        </button>
        <button
          onClick={() => setActiveSection('list')}
          className={activeSection === 'list' ? 'active' : ''}
        >
          Workout List
        </button>
        <button
          onClick={() => setActiveSection('card')}
          className={activeSection === 'card' ? 'active' : ''}
        >
          Workout Card
        </button>
      </div>
      {activeSection === 'form' && <WorkoutForm onSubmit={handleAddWorkout} />}
      {activeSection === 'list' && <WorkoutList workouts={workouts} />}
      {activeSection === 'card' && <WorkoutCard workout={workouts[0]} />}
    </div>
  );
};

export default WorkoutPage;



