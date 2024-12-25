import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './EditEquipment.css';

const EditEquipment = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    unit: '',
    urlPicture: '',
    description: '',
  });

  useEffect(() => {
    const fetchEquipment = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/equipment/${id}`);
        const data = await response.json();
        setFormData(data);
      } catch (error) {
        console.error('Error fetching equipment:', error);
      }
    };

    fetchEquipment();
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
      await fetch(`http://localhost:5000/api/equipment/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      navigate('/view-equipment');
    } catch (error) {
      console.error('Error updating equipment:', error);
    }
  };

  return (
    <div className="edit-equipmentN">
      <h2>Edit Equipment</h2>
      <form onSubmit={handleSubmit}>
        <div className='form-groupN'>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className='form-groupN'>
          <label>Price:</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </div>
        <div className='form-groupN'>
          <label>Unit:</label>
          <input
            type="text"
            name="unit"
            value={formData.unit}
            onChange={handleChange}
            required
          />
        </div>
        <div className='form-groupN'>
          <label>URL Picture:</label>
          <input
            type="text"
            name="urlPicture"
            value={formData.urlPicture}
            onChange={handleChange}
            required
          />
        </div>
        <div className='form-groupN'>
          <label>Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        <button className='submit-buttonN' type="submit">Update Equipment</button>
      </form>
    </div>
  );
};

export default EditEquipment;