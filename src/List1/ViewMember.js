import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ViewMember.css';

const ViewMember = () => {
  const [members, setMembers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/members');
        const data = await response.json();
        setMembers(data);
      } catch (error) {
        console.error('Error fetching members:', error);
      }
    };

    fetchMembers();
  }, []);

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:5000/api/members/${id}`, {
        method: 'DELETE',
      });
      setMembers(members.filter(member => member._id !== id));
    } catch (error) {
      console.error('Error deleting member:', error);
    }
  };

  return (
    <div className="containerC">
      <div className='head'>
        <div className='header-r'>
          <button className='logout-butt user-info-button'>Logout</button>
        </div>
        <div className='welcome-s'>
          <div className='logo-c'>
            <img
              src={require('../assets/images/human-biceps-hand-on-white-vector.jpg')}
              alt="Logo"
              className="log"
            />
          </div>
          <div className="welcome-t">
            <h1>View Members</h1>
            <p>Manage Your Gym Members</p>
          </div>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Age</th>
            <th>Username</th>
            <th>Profile Pic</th>
            <th>Joined</th>
            <th>Trainer</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member) => (
            <tr key={member._id}>
              <td>{member.firstName}</td>
              <td>{member.lastName}</td>
              <td>{member.email}</td>
              <td>{member.mobile}</td>
              <td>{member.age}</td>
              <td>{member.username}</td>
              <td><img src={member.profilePic} alt={member.firstName} style={{ width: '50px', height: '50px' }} /></td>
              <td>{member.joined}</td>
              <td>{member.trainer}</td>
              <td>
                <button className="edit-button" onClick={() => navigate(`/edit-member/${member._id}`)}>Edit</button>
              </td>
              <td><button onClick={() => handleDelete(member._id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewMember;