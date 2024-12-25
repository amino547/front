import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddPackage.css';

const AddPackage = () => {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    duration: '',
    description: '',
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
      const response = await fetch('http://localhost:5000/api/packages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      navigate('/view-package');
    } catch (error) {
      console.error('Error adding package:', error);
    }
  };

  return (
    <div className="admin-dashboardD">
    
      <div className="headerD">
        <div className="header-rightD">
          <button className="logout-buttonD user-info-button">Logout</button>
        </div>
      </div>

     
      <div className="welcome-sectionD">
        <div className="logo-containerD">
          <img
            src={require('../assets/images/R.jpg')} 
            alt="Logo"
            className="logoD"
          />
        </div>
        <div className="welcome-textD">
          <h1>Add Package</h1>
          <p>Fill in the details to add a new Package</p>
        </div>
      </div>

    
      <div className="add-package">
        <h2>Add Package</h2>
        <form className='' onSubmit={handleSubmit}>
          <div className='form-groupD'>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className='form-groupD'>
            <label>Price:</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              required
            />
          </div>
          <div className='form-groupD'>
            <label>Duration:</label>
            <input
              type="text"
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              required
            />
          </div>
          <div className='form-groupD'>
            <label>Description:</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="submit-buttonD">Add Package</button>
        </form>
      </div>
    </div>
  );
};

export default AddPackage;