// components/ProUse.js
/*import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import './ProUse.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faVenusMars, faBirthdayCake, faRulerVertical, faWeight, faBalanceScale, faLanguage, faCalendarAlt, faEnvelope, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const ProUse = () => {
  const { userId, token, logout } = useAuth();
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/users/${userId}`, {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
        setUserData(response.data);
      } catch (err) {
        setError(err.response?.data.msg || 'Something went wrong. Please try again later.');
      }
    };

    fetchUserData();
  }, [userId, token]);

  const handleLogout = () => {
    logout();
    navigate('/signin');
  };

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="profile-page">
      <h1>Profile</h1>
      <div className="card-container">
        <div className="card">
          <h3>Personal Information</h3>
          <div className="profile-item">
            <FontAwesomeIcon icon={faUser} />
            <span className="profile-label">First Name</span>
            <span className="profile-value">{userData.firstName}</span>
          </div>
          <div className="profile-item">
            <FontAwesomeIcon icon={faVenusMars} />
            <span className="profile-label">Gender</span>
            <span className="profile-value">{userData.gender}</span>
          </div>
          <div className="profile-item">
            <FontAwesomeIcon icon={faBirthdayCake} />
            <span className="profile-label">Age</span>
            <span className="profile-value">{userData.age}</span>
          </div>
          <div className="profile-item">
            <FontAwesomeIcon icon={faRulerVertical} />
            <span className="profile-label">Height</span>
            <span className="profile-value">{userData.height} cm</span>
          </div>
          <div className="profile-item">
            <FontAwesomeIcon icon={faWeight} />
            <span className="profile-label">Weight</span>
            <span className="profile-value">{userData.weight} kg</span>
          </div>
        </div>
        <div className="card">
          <h3>Application Settings</h3>
          <div className="profile-item">
            <FontAwesomeIcon icon={faBalanceScale} />
            <span className="profile-label">Unit System</span>
            <span className="profile-value">{userData.unitSystem}</span>
          </div>
          <div className="profile-item">
            <FontAwesomeIcon icon={faLanguage} />
            <span className="profile-label">Language</span>
            <span className="profile-value">{userData.language}</span>
          </div>
          <div className="profile-item">
            <FontAwesomeIcon icon={faCalendarAlt} />
            <span className="profile-label">Start of Week</span>
            <span className="profile-value">{userData.startOfWeek}</span>
          </div>
        </div>
        <div className="card">
          <h3>Account Details</h3>
          <div className="profile-item">
            <FontAwesomeIcon icon={faEnvelope} />
            <span className="profile-label">Email</span>
            <span className="profile-value">{userData.email}</span>
          </div>
          <div className="profile-item">
            <FontAwesomeIcon icon={faSignOutAlt} />
            <button className="btn" onClick={handleLogout}>Logout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProUse;*/



