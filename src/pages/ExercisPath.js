/*import React, { useState, useContext } from 'react';
import { UserContext } from '../context/UserContext';
import './ExercisePath.css';

const ExercisePath = () => {
  const { state, dispatch } = useContext(UserContext);
  const [exercises, setExercises] = useState([
    { name: '', sets: '', reps: '', restTime: '' },
  ]);

  const handleChange = (index, e) => {
    const newExercises = [...exercises];
    newExercises[index][e.target.name] = e.target.value;
    setExercises(newExercises);
  };

  const handleAddExercise = () => {
    setExercises([
      ...exercises,
      { name: '', sets: '', reps: '', restTime: '' },
    ]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newExercises = exercises.map(exercise => ({
      name: exercise.name,
      sets: exercise.sets,
      reps: exercise.reps,
      restTime: exercise.restTime
    }));
    dispatch({ type: 'ADD_EXERCISE', payload: newExercises });
    setExercises([{ name: '', sets: '', reps: '', restTime: '' }]);
  };

  return (
    <div className="exercise-path">
      <h2>Add Exercises</h2>
      <form onSubmit={handleSubmit}>
        {exercises.map((exercise, index) => (
          <div key={index} className="exercise-card">
            <div className="form-group">
              <label>Exercise Name</label>
              <input
                type="text"
                name="name"
                value={exercise.name}
                onChange={(e) => handleChange(index, e)}
                placeholder="e.g., Push Ups"
                required
              />
            </div>
            <div className="form-group">
              <label>Sets</label>
              <input
                type="number"
                name="sets"
                value={exercise.sets}
                onChange={(e) => handleChange(index, e)}
                placeholder="e.g., 3"
                required
              />
            </div>
            <div className="form-group">
              <label>Reps</label>
              <input
                type="number"
                name="reps"
                value={exercise.reps}
                onChange={(e) => handleChange(index, e)}
                placeholder="e.g., 12"
                required
              />
            </div>
            <div className="form-group">
              <label>Rest Time</label>
              <input
                type="text"
                name="restTime"
                value={exercise.restTime}
                onChange={(e) => handleChange(index, e)}
                placeholder="e.g., 60 seconds"
                required
              />
            </div>
          </div>
        ))}
        <button type="button" onClick={handleAddExercise} className="add-exercise-btn">
          Add More Exercise
        </button>
        <button type="submit" className="submit-btn">
          Save Exercises
        </button>
      </form>
    </div>
  );
};

export default ExercisePath;*/

import React, { useState, useContext } from 'react';
import { ExerciseContext } from '../context/ExerciseContext';
import axios from 'axios';
import './ExercisePath.css';

const ExercisePath = () => {
  const { dispatch } = useContext(ExerciseContext);
  const [exercises, setExercises] = useState([
    { name: '', sets: '', reps: '', restTime: '', image: '' },
  ]);

  const handleChange = (index, e) => {
    const newExercises = [...exercises];
    newExercises[index][e.target.name] = e.target.value;
    setExercises(newExercises);
  };

  const handleAddExercise = () => {
    setExercises([
      ...exercises,
      { name: '', sets: '', reps: '', restTime: '', image: '' },
    ]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newExercises = exercises.map(exercise => ({
      name: exercise.name,
      sets: exercise.sets,
      reps: exercise.reps,
      restTime: exercise.restTime,
      image: exercise.image,
    }));

    try {
      const response = await axios.post('http://localhost:5000/exercises', newExercises);
      dispatch({ type: 'ADD_EXERCISE', payload: response.data });
      setExercises([{ name: '', sets: '', reps: '', restTime: '', image: '' }]);

      // Fetch the updated list of exercises
      const updatedResponse = await axios.get('http://localhost:5000/exercises');
      dispatch({ type: 'SET_EXERCISES', payload: updatedResponse.data });
    } catch (error) {
      console.error('Error adding exercises:', error);
    }
  };

  return (
    <div className="exercise-path">
      <h2>Add Exercises</h2>
      <form onSubmit={handleSubmit}>
        {exercises.map((exercise, index) => (
          <div key={index} className="card-Exe">
            <div className="form-group">
              <label>Exercise Name</label>
              <input
                type="text"
                name="name"
                value={exercise.name}
                onChange={(e) => handleChange(index, e)}
                placeholder="e.g., Push Ups"
                required
              />
            </div>
            <div className="form-group">
              <label>Sets</label>
              <input
                type="number"
                name="sets"
                value={exercise.sets}
                onChange={(e) => handleChange(index, e)}
                placeholder="e.g., 3"
                required
              />
            </div>
            <div className="form-group">
              <label>Reps</label>
              <input
                type="number"
                name="reps"
                value={exercise.reps}
                onChange={(e) => handleChange(index, e)}
                placeholder="e.g., 12"
                required
              />
            </div>
            <div className="form-group">
              <label>Rest Time</label>
              <input
                type="text"
                name="restTime"
                value={exercise.restTime}
                onChange={(e) => handleChange(index, e)}
                placeholder="e.g., 60 seconds"
                required
              />
            </div>
            <div className="form-group">
              <label>Image URL</label>
              <input
                type="text"
                name="image"
                value={exercise.image}
                onChange={(e) => handleChange(index, e)}
                placeholder="e.g., https://example.com/image.jpg"
                required
              />
            </div>
          </div>
        ))}
        <button type="button" onClick={handleAddExercise} className="add-exercise-btn">
          Add More Exercise
        </button>
        <button type="submit" className="submit-btn">
          Save Exercises
        </button>
      </form>
    </div>
  );
};

export default ExercisePath;












