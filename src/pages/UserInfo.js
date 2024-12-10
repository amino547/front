import React, { useState, useContext, useRef } from 'react';
import { AuthContext } from '../context/AuthContext';
import './UserInfo.css';
import WorkoutPlans from '../components/workout/WorkoutPlans';
import { Link } from 'react-router-dom';

const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const UserInfo = () => {
  const { state, dispatch } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    difficulty: '',
    type: '',
    objective: '',
    programPerWeek: '',
    dateOfCreation: '',
    selectedDays: []
  });
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDayChange = (day) => {
    setFormData(prevFormData => {
      const newSelectedDays = prevFormData.selectedDays.includes(day)
        ? prevFormData.selectedDays.filter(d => d !== day)
        : [...prevFormData.selectedDays, day];
      return { ...prevFormData, selectedDays: newSelectedDays };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPlan = {
      name: "User's Workout Plan",
      difficulty: formData.difficulty,
      type: formData.type,
      goal: formData.objective,
      schedule: formData.selectedDays,
      creationDate: formData.dateOfCreation,
      isActive: true,
    };
    dispatch({ type: 'ADD_WORKOUT_PLAN', payload: newPlan });
    setFormData({
      difficulty: '',
      type: '',
      objective: '',
      programPerWeek: '',
      dateOfCreation: '',
      selectedDays: []
    });
    setDropdownOpen(false); 
  };

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setDropdownOpen(false);
    }
  };

  return (
    <div className="user-info-page" onClick={handleClickOutside}>
      <h1>User Info</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Difficulty</label>
          <input type="text" name="difficulty" value={formData.difficulty} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Type</label>
          <select name="type" value={formData.type} onChange={handleChange} required>
            <option value="">Select Type</option>
            <option value="1 Week Cycle">1 Week Cycle</option>
            <option value="2 Week Cycle">2 Week Cycle</option>
            <option value="4 Week Cycle">4 Week Cycle</option>
          </select>
        </div>
        <div className="form-group">
          <label>Objective</label>
          <input type="text" name="objective" value={formData.objective} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Select Days</label>
          <div className="dropdown" ref={dropdownRef}>
            <button type="button" onClick={toggleDropdown} className="dropdown-toggle">
              Select Days
            </button>
            {isDropdownOpen && (
              <div className="dropdown-menu">
                {daysOfWeek.map(day => (
                  <label key={day} className="dropdown-item">
                    <input
                      type="checkbox"
                      checked={formData.selectedDays.includes(day)}
                      onChange={() => handleDayChange(day)}
                    />
                    {day}
                  </label>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="form-group">
          <label>Date of Creation</label>
          <input type="date" name="dateOfCreation" value={formData.dateOfCreation} onChange={handleChange} required />
        </div>
        <button type="submit">Add Workout Plan</button>
      </form>
      <Link to="/exercise-path" className="add-exercise-link">
        <span className="plus-icon">+</span> Add Exercise
      </Link>
      <WorkoutPlans plans={state.workoutPlans} exercises={state.exercises} />
    </div>
  );
};

export default UserInfo;




