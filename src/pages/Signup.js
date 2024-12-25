



// SignUp.js
// components/Signup.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import './Signup.css'

const Signup = () => {
  const { login } = useAuth();
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
    password: '',
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/auth/register', formData);
      login(response.data.token, response.data.userId);
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data.msg || 'Something went wrong. Please try again later.');
    }
  };

  return (
    <div className="signup-page">
      <h1>Sign Up</h1>
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
        <div className="form-group">
          <label>Password</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;




