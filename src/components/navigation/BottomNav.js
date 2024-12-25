import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faTachometerAlt, faUser, faDumbbell, faRunning } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import './BottomNav.css';

const BottomNav = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/signin');
  };

  return (
    <nav className="bottom-nav">
      <ul className="bottom-nav-links">
        <li><a href="/" onClick={() => handleNavigation('/')}><FontAwesomeIcon icon={faHome} /> Home</a></li>
        <li><a href="/dashboard" onClick={() => handleNavigation('/dashboard')}><FontAwesomeIcon icon={faTachometerAlt} /> Dashboard</a></li>
        <li><a href="/profile" onClick={() => handleNavigation('/profile')}><FontAwesomeIcon icon={faUser} /> Profile</a></li>
        <li><a href="/workouts" onClick={() => handleNavigation('/workouts')}><FontAwesomeIcon icon={faDumbbell} /> Workouts</a></li>
        <li><a href="/exercises" onClick={() => handleNavigation('/exercises')}><FontAwesomeIcon icon={faRunning} /> Exercises</a></li>
      </ul>
    </nav>
  );
};

export default BottomNav;



