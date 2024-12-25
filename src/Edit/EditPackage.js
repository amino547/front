import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './EditPackage.css';

const EditPackage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    duration: '',
    description: '',
  });

  useEffect(() => {
    const fetchPackage = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/packages/${id}`);
        const data = await response.json();
        setFormData(data);
      } catch (error) {
        console.error('Error fetching package:', error);
      }
    };

    fetchPackage();
  }, [id]);

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
      await fetch(`http://localhost:5000/api/packages/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      navigate('/view-package');
    } catch (error) {
      console.error('Error updating package:', error);
    }
  };

  return (
    <div className="edit-package">
      <h2>Edit Package</h2>
      <form className='S' onSubmit={handleSubmit}>
        <div className='M'>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className='M'>
          <label>Price:</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </div>
        <div className='M'>
          <label>Duration:</label>
          <input
            type="text"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            required
          />
        </div>
        <div className='M'>
          <label>Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Update Package</button>
      </form>
    </div>
  );
};

export default EditPackage;