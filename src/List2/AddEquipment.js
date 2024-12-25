import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddEquipment.css';

const AddEquipment = () => {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    unit: '',
    urlPicture: '',
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
      const response = await fetch('http://localhost:5000/api/equipment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      navigate('/view-equipment');
    } catch (error) {
      console.error('Error adding equipment:', error);
    }
  };

  return (
    <div className="admin-dashboardx">
      <div className="headerx">
        <div className="header-rightx">
          <button className="logout-buttonx user-info-button">Logout</button>
        </div>
      </div>
      <div className="welcome-sectionx">
        <div className="logo-containerx">
          <img src={require('../assets/images/OIP (1).jpg')} alt="LogoB" className="logoB" />
        </div>
        <div className="welcome-textx">
          <h1>Add Equipment</h1>
          <p>Fill in the details to add new equipment</p>
        </div>
      </div>
      <div className="add-equipment">
        <h2>ADD EQUIPMENT</h2>
        <form className="x" onSubmit={handleSubmit}>
          <div className="form-groupx">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-groupx">
            <label>Description:</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-groupx">
            <label>Price:</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-groupx">
            <label>Unit:</label>
            <input
              type="text"
              name="unit"
              value={formData.unit}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-groupx">
            <label>URL Picture:</label>
            <input
              type="text"
              name="urlPicture"
              value={formData.urlPicture}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Add Equipment</button>
        </form>
      </div>
    </div>
  );
};

export default AddEquipment;
