import React from 'react';
import './Equipment.css';
import { useNavigate } from 'react-router-dom';
import { FaPlus, FaEye } from 'react-icons/fa';

const Equipment = () => {
  const navigate = useNavigate();
  return (
    <div className="equipment-dashboard home2">
      <div className="header">
        <div className="header-right">
          <button className="logout-button user-info-button">Logout</button>
        </div>
      </div>
      <div className="welcome-section">
        <div className="logo-container">
          <img src={require('../assets/images/OIP (1).jpg')} alt="Logo" className="logo" /> {/* Update the path to your logo */}
        </div>
        <div className="welcome-text3">
          <h1>Hello</h1>
          <p>Manage Equipment For Your Gym</p>
        </div>
      </div>
      <div className="action-buttonsx1">
        <button className="action-buttonx1 add-equipmentx1" onClick={()=> navigate('/add-equipment')}>
          <FaPlus className="iconx1" />
          Add Equipment
        </button>
        <button className="action-buttonx1 view-equipmentx1" onClick={()=> navigate('/view-equipment')}>
          <FaEye className="iconx1" />
          View Equipment
        </button>
      </div>
    </div>
  );
};

export default Equipment;