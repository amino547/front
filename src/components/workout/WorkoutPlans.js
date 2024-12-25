/*import React from 'react';
import './WorkoutPlans.css';
import { Link } from 'react-router-dom';

const WorkoutPlans = ({ plans = [], exercises = [] }) => {
  return (
    <div className="workout-plans-page">
      <h1>Training Plans</h1>
      <div className="plans-container">
        {plans.map((plan, index) => (
          <div key={index} className={`plan-card ${plan.isActive ? 'active-plan' : ''}`}>
            {plan.isActive && <p className="active-tag">Active Training Plans</p>}
            <h2>{plan.name}</h2>
            <ul className="plan-details">
              <li>
                <span>🌟 Difficulty:</span> {plan.difficulty}
              </li>
              <li>
                <span>📅 Type:</span> {plan.type}
              </li>
              <li>
                <span>🎯 Objective:</span> {plan.goal}
              </li>
              <li>
                <span>🗓️ Programme:</span> {plan.schedule.join(', ')}
              </li>
            </ul>
            <Link to={`/plan/${index}`} className="plan-link">
              See the Exercises
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkoutPlans;*/


import React, { useEffect, useState } from 'react';
import './WorkoutPlans.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const WorkoutPlans = () => {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/plans');
        setPlans(response.data);
      } catch (error) {
        console.error('Error fetching workout plans:', error);
      }
    };

    fetchPlans();
  }, []);

  return (
    <div className="workout-plans-page">
      <h1>Training Plans</h1>
      <div className="plans-container">
        {plans.length > 0 ? (
          plans.map((plan, index) => (
            <div key={index} className={`plan-card ${plan.isActive ? 'active-plan' : ''}`}>
              {plan.isActive && <p className="active-tag">Active Training Plans</p>}
              <h2>{plan.name}</h2>
              <ul className="plan-details">
                <li>
                  <span>🌟 Difficulty:</span> {plan.difficulty}
                </li>
                <li>
                  <span>📅 Type:</span> {plan.type}
                </li>
                <li>
                  <span>🎯 Objective:</span> {plan.goal}
                </li>
                <li>
                  <span>🗓️ Programme:</span> {plan.schedule.join(', ')}
                </li>
              </ul>
              <Link to={`/plan/${index}`} className="plan-link">
                See the Exercises
              </Link>
            </div>
          ))
        ) : (
          <p className="no-plans-message">No training plans available.</p>
        )}
      </div>
    </div>
  );
};

export default WorkoutPlans;












