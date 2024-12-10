import React, { useState } from 'react';
import './Dashboard.css';

const Dashboard = () => {
  const [formData, setFormData] = useState({
    age: '',
    height: '',
    weight: '',
    gender: 'male',
    activityLevel: 1.2, 
  });

  const [results, setResults] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const calculateNutrition = () => {
    const { age, height, weight, gender, activityLevel } = formData;

    if (!age || !height || !weight) {
      alert('Please fill in all fields!');
      return;
    }

   
    let bmr;
    if (gender === 'male') {
      bmr = 88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age);
    } else {
      bmr = 447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age);
    }

    
    const dailyCalories = bmr * activityLevel;

  
    const proteins = (dailyCalories * 0.2) / 4; 
    const carbohydrates = (dailyCalories * 0.5) / 4; 
    const fats = (dailyCalories * 0.3) / 9; 

    setResults({
      dailyCalories: dailyCalories.toFixed(2),
      proteins: proteins.toFixed(2),
      carbohydrates: carbohydrates.toFixed(2),
      fats: fats.toFixed(2),
    });
  };

  return (
    <div className="dashboard">
      <h1>Nutrition Dashboard</h1>
      <div className="form-container">
        <div className="form-group">
          <label>Age (years)</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Height (cm)</label>
          <input
            type="number"
            name="height"
            value={formData.height}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Weight (kg)</label>
          <input
            type="number"
            name="weight"
            value={formData.weight}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Gender</label>
          <select name="gender" value={formData.gender} onChange={handleChange}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className="form-group">
          <label>Activity Level</label>
          <select
            name="activityLevel"
            value={formData.activityLevel}
            onChange={handleChange}
          >
            <option value={1.2}>Sedentary (little or no exercise)</option>
            <option value={1.375}>Lightly active (light exercise)</option>
            <option value={1.55}>Moderately active (moderate exercise)</option>
            <option value={1.725}>Very active (hard exercise)</option>
            <option value={1.9}>Extra active (very hard exercise)</option>
          </select>
        </div>
        <button onClick={calculateNutrition}>Calculate</button>
      </div>

      {results && (
        <div className="results">
          <h2>Daily Nutrition Needs</h2>
          <p>Calories: {results.dailyCalories} kcal</p>
          <p>Proteins: {results.proteins} g</p>
          <p>Carbohydrates: {results.carbohydrates} g</p>
          <p>Fats: {results.fats} g</p>
        </div>
      )}
    </div>
  );
};

export default Dashboard;



