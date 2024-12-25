// components/Update.js
/*import React, { useState, useEffect } from 'react';
import { useNavigate , useParams } from 'react-router-dom';
import axios from 'axios';

import './Update.css'
import { useAuth } from '../context/AuthContext';

const Update = () => {
  const { id , token } = useAuth();
  const [formData, setFormData] = useState({
    firstName: '',
    gender: '',
    age: '',
    weight: '',
    height: '',
    unitSystem: '',
    language: '',
    startOfWeek: '',
    email: '',
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserSettings = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/users/myaccount`, {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
        setFormData(response.data);
      } catch (err) {
        setError(err.response?.data.msg || 'Something went wrong. Please try again later.');
      }
    };

    fetchUserSettings();
  }, [id,token]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/users/update/${id}`, formData, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      navigate('/profile');
    } catch (err) {
      setError(err.response?.data.msg || 'Something went wrong. Please try again later.');
    }
  };

  const handleWeightUpdate = async () => {
    try {
      await axios.put(`http://localhost:5000/api/users/updateweight/${id}`, { weight: formData.weight }, {
        headers: {
          'Authorization': `Bearer ${token}}`,
        },
      });
      setError(null);
    } catch (err) {
      setError(err.response?.data.msg || 'Something went wrong. Please try again later.');
    }
  };

  return (
    <div className="update-profile-page">
      <h1>Update Profile</h1>
      <form onSubmit={handleSubmit}>
        {error && <div className="error-message">{error}</div>}
        <div className="form-group">
          <label>First Name</label>
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Gender</label>
          <select name="gender" value={formData.gender} onChange={handleChange} required>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label>Age</label>
          <input type="number" name="age" value={formData.age} onChange={handleChange} required min="1" />
        </div>
        <div className="form-group">
          <label>Weight (kg)</label>
          <input type="number" name="weight" value={formData.weight} onChange={handleChange} required min="1" />
        </div>
        <div className="form-group">
          <label>Height (cm)</label>
          <input type="number" name="height" value={formData.height} onChange={handleChange} required min="1" />
        </div>
        <div className="form-group">
          <label>Unit System</label>
          <select name="unitSystem" value={formData.unitSystem} onChange={handleChange} required>
            <option value="">Select Unit System</option>
            <option value="metric">Metric (kg, cm)</option>
            <option value="imperial">Imperial (lbs, inches)</option>
          </select>
        </div>
        <div className="form-group">
          <label>Language</label>
          <select name="language" value={formData.language} onChange={handleChange} required>
            <option value="en">English</option>
            <option value="ar">Arabic</option>
            <option value="fr">French</option>
          </select>
        </div>
        <div className="form-group">
          <label>Start of Week</label>
          <input type="text" name="startOfWeek" value={formData.startOfWeek} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <button type="submit">Update Profile</button>
      </form>
      <button onClick={handleWeightUpdate}>Update Weight</button>
    </div>
  );
};

export default Update;*/


import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import './Update.css';

const Update = () => {
  const { id, token } = useParams();
  const [formData, setFormData] = useState({
    firstName: '',
    gender: '',
    age: '',
    weight: '',
    height: '',
    unitSystem: '',
    language: '',
    startOfWeek: '',
    email: '',
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserSettings = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/users/myaccount`, {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
        setFormData(response.data);
      } catch (err) {
        setError(err.response?.data.msg || 'Something went wrong. Please try again later.');
      }
    };

    fetchUserSettings();
  }, [id, token]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/users/update/${id}`, formData, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      navigate('/profile');
    } catch (err) {
      setError(err.response?.data.msg || 'Something went wrong. Please try again later.');
    }
  };

  const handleWeightUpdate = async () => {
    try {
      await axios.put(`http://localhost:5000/api/users/updateweight/${id}`, { weight: formData.weight }, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      setError(null);
    } catch (err) {
      setError(err.response?.data.msg || 'Something went wrong. Please try again later.');
    }
  };

  return (
    <div className="update-profile-page">
      <h1>Update Profile</h1>
      <form onSubmit={handleSubmit}>
        {error && <div className="error-message">{error}</div>}
        <div className="form-group">
          <label>First Name</label>
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Gender</label>
          <select name="gender" value={formData.gender} onChange={handleChange} required>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label>Age</label>
          <input type="number" name="age" value={formData.age} onChange={handleChange} required min="1" />
        </div>
        <div className="form-group">
          <label>Weight (kg)</label>
          <input type="number" name="weight" value={formData.weight} onChange={handleChange} required min="1" />
        </div>
        <div className="form-group">
          <label>Height (cm)</label>
          <input type="number" name="height" value={formData.height} onChange={handleChange} required min="1" />
        </div>
        <div className="form-group">
          <label>Unit System</label>
          <select name="unitSystem" value={formData.unitSystem} onChange={handleChange} required>
            <option value="">Select Unit System</option>
            <option value="metric">Metric (kg, cm)</option>
            <option value="imperial">Imperial (lbs, inches)</option>
          </select>
        </div>
        <div className="form-group">
          <label>Language</label>
          <select name="language" value={formData.language} onChange={handleChange} required>
            <option value="en">English</option>
            <option value="ar">Arabic</option>
            <option value="fr">French</option>
          </select>
        </div>
        <div className="form-group">
          <label>Start of Week</label>
          <input type="text" name="startOfWeek" value={formData.startOfWeek} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <button type="submit">Update Profile</button>
      </form>
      <button onClick={handleWeightUpdate}>Update Weight</button>
    </div>
  );
};

export default Update;





