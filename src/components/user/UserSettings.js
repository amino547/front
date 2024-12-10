import React, { useState } from 'react';
import './UserSettings.css';

const UserSettings = ({ user, onSave }) => {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);

  const handleSave = () => {
    onSave({ name, email });
  };

  return (
    <div className="user-settings">
      <h1>User Settings</h1>
      <div className="settings-form">
        <div className="form-group">
          <label>Name</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <button onClick={handleSave}>Save</button>
      </div>
    </div>
  );
};

export default UserSettings;

