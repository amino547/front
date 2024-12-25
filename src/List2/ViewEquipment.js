import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ViewEquipment.css';

const ViewEquipment = () => {
  const [equipments, setEquipments] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEquipments = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/equipment');
        const data = await response.json();
        setEquipments(data);
      } catch (error) {
        console.error('Error fetching equipments:', error);
      }
    };

    fetchEquipments();
  }, []);

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:5000/api/equipment/${id}`, {
        method: 'DELETE',
      });
      setEquipments(equipments.filter(equipment => equipment._id !== id));
    } catch (error) {
      console.error('Error deleting equipment:', error);
    }
  };

  return (
    <div className="containerX2">
      <div className='head'>
        <div className='header-r'>
          <button className='logout-butt user-info-button'>Logout</button>
        </div>
        <div className='welcome-s'>
          <div className='logo-c'>
            <img
              src={require('../assets/images/OIP (1).jpg')}
              alt="Logo"
              className="log"
            />
          </div>
          <div className="welcome-textX2">
            <h1>View Equipment</h1>
            <p>Manage Your Gym Equipment</p>
          </div>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Unit</th>
            <th>URL Picture</th>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {equipments.map((equipment) => (
            <tr key={equipment._id}>
              <td>{equipment.name}</td>
              <td>{equipment.price}</td>
              <td>{equipment.unit}</td>
              <td><img src={equipment.urlPicture} alt={equipment.name} style={{ width: '50px', height: '50px' }} /></td>
              <td>{equipment.description}</td>
              <td>
                <button className="edit-button" onClick={() => navigate(`/edit-equipment/${equipment._id}`)}>Edit</button>
              </td>
              <td><button onClick={() => handleDelete(equipment._id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewEquipment;