import React, { useState } from 'react';
import UserProfile from '../components/user/UserProfile';
import UserStats from '../components/user/UserStats';
import UserSettings from '../components/user/UserSettings';
import './UserPage.css';

const UserPage = () => {
  const [user, setUser] = useState({
    name: 'amen allah',
    email: 'amengharbi@example.com',
    avatar: '/an.jpg',
    joinedDate: '2022-01-01',
  });

  const [stats, setStats] = useState({
    totalWorkouts: 120,
    caloriesBurned: 5000,
    averageDuration: '45 min',
  });

  const [activeSection, setActiveSection] = useState('profile');

  const handleSave = (updatedUser) => {
    setUser(updatedUser);
  };

  return (
    <div className="user-page1">
      <h1>User Dashboard</h1>
      <div className="navigation1">
        <button
          onClick={() => setActiveSection('profile')}
          className={activeSection === 'profile' ? 'active' : ''}
        >
          User Profile
        </button>
        <button
          onClick={() => setActiveSection('stats')}
          className={activeSection === 'stats' ? 'active' : ''}
        >
          User Stats
        </button>
        <button
          onClick={() => setActiveSection('settings')}
          className={activeSection === 'settings' ? 'active' : ''}
        >
          User Settings
        </button>
      </div>
      {activeSection === 'profile' && <UserProfile user={user} />}
      {activeSection === 'stats' && <UserStats stats={stats} />}
      {activeSection === 'settings' && <UserSettings user={user} onSave={handleSave} />}
    </div>
  );
};

export default UserPage;




