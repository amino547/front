import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ViewTrainer.css';

const ViewTrainer = () => {
  const [trainers, setTrainers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTrainers = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/trainers');
        const data = await response.json();
        setTrainers(data);
      } catch (error) {
        console.error('Error fetching trainers:', error);
      }
    };

    fetchTrainers();
  }, []);

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:5000/api/trainers/${id}`, {
        method: 'DELETE',
      });
      setTrainers(trainers.filter(trainer => trainer._id !== id));
    } catch (error) {
      console.error('Error deleting trainer:', error);
    }
  };

  return (
    <div className="containerC1">
      <div className='head1'>
        <div className='header-r1'>
          <button className='logout-butt1 user-info-button'>Logout</button>
        </div>
        <div className='welcome-s1'>
          <div className='logo-c1'>
            <img
              src={require('../assets/images/human-biceps-hand-on-white-vector.jpg')}
              alt="Logo"
              className="log1"
            />
          </div>
          <div className="welcome-t1">
            <h1>View Trainer</h1>
            <p>Manage Your Gym Trainer</p>
          </div>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Profile Pic</th>
            <th>Mobile</th>
            <th>Age</th>
            <th>Experience</th>
            <th>Salary</th>
            <th>Joined</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {trainers.map((trainer) => (
            <tr key={trainer._id}>
              <td>{trainer.name}</td>
              <td><img src={trainer.profilePic} alt={trainer.name} style={{ width: '50px', height: '50px' }} /></td>
              <td>{trainer.mobile}</td>
              <td>{trainer.age}</td>
              <td>{trainer.experience}</td>
              <td>{trainer.salary}</td>
              <td>{trainer.joined}</td>
              <td>
                <button className="edit-button" onClick={() => navigate(`/edit-trainer/${trainer._id}`)}>Edit</button>
              </td>
              <td><button onClick={() => handleDelete(trainer._id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewTrainer;