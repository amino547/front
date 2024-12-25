import React from 'react';
import './Membres.css';
import { useNavigate } from 'react-router-dom';
import { FaPlus, FaEye, FaCheck, FaDollarSign } from 'react-icons/fa';

const Membres = () => {
  const navigate = useNavigate();
  return (
    <div className="membres-dashboard home1">
      <div className="header">
        <div className="header-right">
          <button className="logout-button user-info-button">Logout</button>
        </div>
      </div>
      <div className="welcome-section">
        <div className="logo-container">
          <img src={require('../assets/images/OIP.jpg')} alt="Logo" className="logo" /> {/* Update the path to your logo */}
        </div>
        <div className="welcome-text2">
          <h1>Hello</h1>
          <p>Manage Member For Your Gym</p>
        </div>
      </div>
      <div className="action-buttons1">
        <button className="action-button1 add-member1" onClick={()=> navigate('/add-member')}>
          <FaPlus className="icon1" />
          Add Member
        </button>
        <button className="action-button1 view-member1" onClick={()=> navigate('/view-member')}>
          <FaEye className="icon1" />
          View Member
        </button>
        <button className="action-button1 approve-member1" onClick={()=> navigate('/approve-member')}>
          <FaCheck className="icon1" />
          Approve Member
        </button>
        <button className="action-button1 member-package1" onClick={()=> navigate('/member-package')}>
          <FaDollarSign className="icon1" />
          Member's Package
        </button>
      </div>
    </div>
  );
};

export default Membres;