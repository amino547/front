import React from 'react';
import './Packages.css';
import { useNavigate } from 'react-router-dom';
import { FaPlus, FaEye } from 'react-icons/fa';

const Packages = () => {
  const navigate = useNavigate();
  return (
    <div className="packages-dashboard home3">
      <div className="header">
        <div className="header-right">
          <button className="logout-button user-info-button">Logout</button>
        </div>
      </div>
      <div className="welcome-section">
        <div className="logo-container">
          <img src={require('../assets/images/R.jpg')} alt="Logo" className="logo" /> {/* Update the path to your logo */}
        </div>
        <div className="welcome-text5">
          <h1>Hello</h1>
          <p>Manage Packages For Your Gym</p>
        </div>
      </div>
      <div className="action-buttons">
        <button className="action-button add-package" onClick={()=> navigate('/add-package')}>
          <FaPlus className="icon" />
          Add Package
        </button>
        <button className="action-button view-package" onClick={()=> navigate('/view-package')}>
          <FaEye className="icon" />
          View Package
        </button>
      </div>
    </div>
  );
};

export default Packages;
