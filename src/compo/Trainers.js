import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Trainers.css';
import { FaPlus, FaEye, FaCheck, FaClock } from 'react-icons/fa';

const Trainers = () => {
  const navigate = useNavigate();

  return (
    <div className="trainers-dashboard home4">
      <div className="header">
        <div className="header-right">
          <button className="logout-button user-info-button">Logout</button>
        </div>
      </div>
      <div className="welcome-section1">
        <div className="logo-container">
          <img src={require('../assets/images/human-biceps-hand-on-white-vector.jpg')} alt="Logo1" className="logo1" /> {/* Update the path to your logo */}
        </div>
        <div className="welcome-text4">
          <h1>Hello</h1>
          <p>Manage Trainers For Your Gym</p>
        </div>
      </div>
      <div className="action-buttons">
        <button className="action-button add-trainer" onClick={() => navigate('/add-trainer')}>
          <FaPlus className="icon" />
          Add Trainer
        </button>
        <button className="action-button view-trainer" onClick={()=> navigate('/view-trainer')}>
          <FaEye className="icon" />
          View Trainer
        </button>
        <button className="action-button approve-trainer" onClick={()=> navigate('/approve-trainer')}>
          <FaCheck className="icon" />
          Approve Trainer
        </button>
        <button className="action-button trainer-shift" onClick={()=> navigate('/trainer-shift')}>
          <FaClock className="icon" />
          Trainer Shift
        </button>
      </div>
    </div>
  );
};

export default Trainers;