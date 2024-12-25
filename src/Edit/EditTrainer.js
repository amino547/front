
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './EditTrainer.css';

const EditTrainer = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    profilePic: '',
    mobile: '',
    age: '',
    experience: '',
    salary: '',
    joined: '',
  });

  useEffect(() => {
    const fetchTrainer = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/trainers/${id}`);
        const data = await response.json();
        setFormData(data);
      } catch (error) {
        console.error('Error fetching trainer:', error);
      }
    };

    fetchTrainer();
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
      await fetch(`http://localhost:5000/api/trainers/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      navigate('/view-trainer');
    } catch (error) {
      console.error('Error updating trainer:', error);
    }
  };

  return (
    <div className="edit-trainer"  onSubmit={handleSubmit}>
    <h2>Edit Trainer</h2>
    <form className='W' onSubmit={handleSubmit}>
      <div className='form-groupW'>
      <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className='form-groupW'>
      <label>Picture Url:</label>
        <input
          type="text"
          name="profilePic"
          value={formData.profilePic}
          onChange={handleChange}
          required
        />
      </div>
      <div className='form-groupW'>
      <label>Mobile:</label>
        <input
          type="text"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
          required
        />
      </div>
      <div className='form-groupW'>
      <label>Age:</label>
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          required
        />
      </div>
      <div className='form-groupW'>
      <label>Experience:</label>
        <input
          type="text"
          name="experience"
          value={formData.experience}
          onChange={handleChange}
          required
        />
      </div>
      <div className='form-groupW'>
      <label>Salary:</label>
        <input
          type="number"
          name="salary"
          value={formData.salary}
          onChange={handleChange}
          required
        />
      </div>
      <div className='form-groupW'>
      <label>Joined:</label>
        <input
          type="text"
          name="joined"
          value={formData.joined}
          onChange={handleChange}
          required
        />
      </div>
      <div>
      <button type="submit">Update Trainer</button>
      </div>
    </form>
  </div>
  );
};

export default EditTrainer;
