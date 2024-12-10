import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext'; 
import './Setting.css';

const Setting = () => {
  const { state, dispatch } = useContext(AuthContext); 

 console.log('state element ',state)
  const handleLogout = () => {
    
    dispatch({ type: 'LOGOUT' });
  };

  
  const handleRestore = () => {
   
    console.log("Settings restored");
  };

  return (
    <div className="setting-section">
      <div className="card-container">
        
        <div className="card">
          <h3>Profil</h3>
          <div className="setting-item">
            <span className="setting-label">First Name</span>
            <span className="setting-value">{state.firstName}</span>
          </div>
          <div className="setting-item">
            <span className="setting-label">Gender</span>
            <span className="setting-value">{state.gender}</span>
          </div>
          <div className="setting-item">
            <span className="setting-label">Age</span>
            <span className="setting-value">{state.age}</span>
          </div>
          <div className="setting-item">
            <span className="setting-label">Height</span>
            <span className="setting-value">{state.height}</span>
          </div>
          <div className="setting-item">
            <span className="setting-label">Weight</span>
            <span className="setting-value">{state.weight}</span>
          </div>
        </div>

        
        <div className="card">
          <h3>Application Settings</h3>
          <div className="setting-item">
            <span className="setting-label">System Of Units</span>
            <span className="setting-value">{state.unitSystem}</span>
          </div>
          <div className="setting-item">
            <span className="setting-label">Language</span>
            <span className="setting-value">{state.language}</span>
          </div>
          <div className="setting-item">
            <span className="setting-label">Start Week</span>
            <span className="setting-value">{state.startOfWeek}</span>
          </div>
        </div>

        
        <div className="card">
          <h3>Account Details</h3>
          <div className="setting-item">
            <span className="setting-label">e-mail</span>
            <span className="setting-value">{state.email}</span>
          </div>
          <div className="account-details">
            <button className="btn restore-btn" onClick={handleRestore}>Restore</button>
            <button className="btn logout-btn" onClick={handleLogout}>Disconnect</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;






