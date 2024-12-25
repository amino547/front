import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './TrainerShift.css';

const TrainerShift = () => {
  const [trainerShifts, setTrainerShifts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTrainerShifts = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/trainerShifts');
        const data = await response.json();
        setTrainerShifts(data);
      } catch (error) {
        console.error('Error fetching trainer shifts:', error);
      }
    };

    fetchTrainerShifts();
  }, []);

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:5000/api/trainerShifts/${id}`, {
        method: 'DELETE',
      });
      setTrainerShifts(trainerShifts.filter(shift => shift._id !== id));
    } catch (error) {
      console.error('Error deleting trainer shift:', error);
    }
  };

  return (
    <div className="admin-dashboard1">
      <header className="head5">
        <div className="header-r5">
          <button className="logout-butt5 user-info-button">Logout</button>
        </div>
        <div className="welcome-s5">
          <div className="logo-c5">
            <img
              src={require('../assets/images/human-biceps-hand-on-white-vector.jpg')}
              alt="Log5"
              className="log5"
            />
          </div>
          <div className="welcome-t5">
            <h1>Trainer Shift</h1>
            <p>Welcome to your admin dashboard</p>
          </div>
        </div>
      </header>
      <table>
        <thead>
          <tr>
            <th>Trainer Name</th>
            <th>Shift Start</th>
            <th>Shift End</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {trainerShifts.map((shift) => (
            <tr key={shift._id}>
              <td>{shift.trainerId.name}</td>
              <td>{new Date(shift.shiftStart).toLocaleString()}</td>
              <td>{new Date(shift.shiftEnd).toLocaleString()}</td>
              <td>
                <button className="edit-button" onClick={() => navigate(`/edit-trainer-shift/${shift._id}`)}>Edit</button>
              </td>
              <td><button onClick={() => handleDelete(shift._id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TrainerShift;