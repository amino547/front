/*import React, { useState } from 'react';
import './WorkoutFrom.css';

const WorkoutForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [duration, setDuration] = useState('');
  const [caloriesBurned, setCaloriesBurned] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newWorkout = { name, duration, caloriesBurned, date };
    onSubmit(newWorkout);
    setName('');
    setDuration('');
    setCaloriesBurned('');
    setDate('');
  };

  return (
    <div className="workout-form">
      <h1>Add Workout</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Duration (min)</label>
          <input
            type="number"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Calories Burned</label>
          <input
            type="number"
            value={caloriesBurned}
            onChange={(e) => setCaloriesBurned(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Workout</button>
      </form>
    </div>
  );
};

export default WorkoutForm;*/


// WorkoutForm.js
// WorkoutForm.js
import React, { useState } from 'react';

const WorkoutForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [type, setType] = useState('');
  const [goal, setGoal] = useState('');
  const [schedule, setSchedule] = useState('');
  const [imageUrl, setImageUrl] = useState(''); // Add imageUrl state

  const handleSubmit = (e) => {
    e.preventDefault();
    const newWorkout = {
      name,
      difficulty,
      type,
      goal,
      schedule: schedule.split(',').map(day => day.trim()),
      imageUrl, // Include imageUrl in the newWorkout object
    };
    onSubmit(newWorkout);
    setName('');
    setDifficulty('');
    setType('');
    setGoal('');
    setSchedule('');
    setImageUrl(''); // Reset imageUrl state
  };

  return (
    <form onSubmit={handleSubmit} className="workout-form">
      <div className="form-group">
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div className="form-group">
        <label>Difficulty:</label>
        <input type="text" value={difficulty} onChange={(e) => setDifficulty(e.target.value)} required />
      </div>
      <div className="form-group">
        <label>Type:</label>
        <input type="text" value={type} onChange={(e) => setType(e.target.value)} required />
      </div>
      <div className="form-group">
        <label>Goal:</label>
        <input type="text" value={goal} onChange={(e) => setGoal(e.target.value)} required />
      </div>
      <div className="form-group">
        <label>Schedule (comma-separated):</label>
        <input type="text" value={schedule} onChange={(e) => setSchedule(e.target.value)} required />
      </div>
      <div className="form-group">
        <label>Image URL:</label>
        <input type="url" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} required />
      </div>
      <button type="submit">Add Workout</button>
    </form>
  );
};

export default WorkoutForm;






