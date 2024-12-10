import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faTachometerAlt, faUser, faDumbbell, faRunning } from '@fortawesome/free-solid-svg-icons';
import './BottomNav.css';

const BottomNav = () => {
  return (
    <nav className="bottom-nav">
      <ul className="bottom-nav-links">
        <li><a href="/"><FontAwesomeIcon icon={faHome} /> Home</a></li>
        <li><a href="/dashboard"><FontAwesomeIcon icon={faTachometerAlt} /> Dashboard</a></li>
        <li><a href="/profile"><FontAwesomeIcon icon={faUser} /> Profile</a></li>
        <li><a href="/workouts"><FontAwesomeIcon icon={faDumbbell} /> Workouts</a></li>
        <li><a href="/exercises"><FontAwesomeIcon icon={faRunning} /> Exercises</a></li>
      </ul>
    </nav>
  );
};

export default BottomNav;


