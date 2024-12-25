
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddTrainer.css';

const AddTrainer = () => {
  const [formData, setFormData] = useState({
    name: '',
    profilePic: '',
    mobile: '',
    age: '',
    experience: '',
    salary: '',
    joined: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/trainers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      navigate('/view-trainer');
    } catch (error) {
      console.error('Error adding trainer:', error);
    }
  };

  return (
    <div className="add-trainer-dashboard addmin">
      <div className="headA">
        <div className="header-rA">
          <button className="logout-buttA user-info-button">Logout</button>
        </div>
      </div>
      <div className="welcome-sA">
        <div className="logo-cA">
          <img
            src={require('../assets/images/human-biceps-hand-on-white-vector.jpg')}
            alt="LogA"
            className="logA"
          />
        </div>
        <div className="welcome-tA">
          <h1>Add Trainer</h1>
          <p>Fill in the details to add a new trainer</p>
        </div>
      </div>
      <div className="user-info-page1">
        <h1>Add Trainer</h1>
        <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
       
        <div className="form-group">
          <label>Mobile</label>
          <input
            type="text"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Age</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Experience</label>
          <input
            type="text"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Salary</label>
          <input
            type="number"
            name="salary"
            value={formData.salary}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Joined</label>
          <input
            type="text"
            name="joined"
            value={formData.joined}
            onChange={handleChange}
            required
          />
        </div>
          <div className="form-group">
          <label>Picture Url:</label>
        <input
          type="text"
          name="profilePic"
          value={formData.profilePic}
          onChange={handleChange}
          required
        />
          </div>
          <button type="submit" className="submit-button">Add Trainer</button>
        </form>
      </div>
    </div>
  );
};

export default AddTrainer;