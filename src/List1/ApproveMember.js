import React, { useEffect, useState } from 'react';
import './ApproveMember.css';

const ApproveMember = () => {
  const [pendingMembers, setPendingMembers] = useState([]);

  useEffect(() => {
    const fetchPendingMembers = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/members');
        const data = await response.json();
        setPendingMembers(data);
      } catch (error) {
        console.error('Error fetching pending members:', error);
      }
    };

    fetchPendingMembers();
  }, []);

  const handleApprove = async (id) => {
    try {
      await fetch(`http://localhost:5000/api/members/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ approved: true }),
      });
      setPendingMembers(pendingMembers.filter(member => member._id !== id));
    } catch (error) {
      console.error('Error approving member:', error);
    }
  };

  const handleReject = async (id) => {
    try {
      await fetch(`http://localhost:5000/api/members/${id}`, {
        method: 'DELETE',
      });
      setPendingMembers(pendingMembers.filter(member => member._id !== id));
    } catch (error) {
      console.error('Error rejecting member:', error);
    }
  };

  return (
    <div className="admin-dashboardB">
      <div className="headerB3">
        <div className="header-rightB3">
          <button className="logout-buttonB3 user-info-button">Logout</button>
        </div>
      </div>
      <div className="welcome-sectionB3">
        <div className="logo-containerB3">
          <img src={require('../assets/images/OIP.jpg')} alt="LogoB3" className="logoB3" />
        </div>
        <div className="welcome-textB3">
          <h1>Approve Member</h1>
          <p>Fill in the details to add a approve member</p>
        </div>
      </div>
      <div className="pending-member-list">
        <h2>Pending Member List</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Profile Pic</th>
              <th>Mobile</th>
              <th>Age</th>
              <th>Package</th>
              <th>Trainer</th>
              <th>Joined</th>
              <th>Approve</th>
              <th>Reject</th>
            </tr>
          </thead>
          <tbody>
            {pendingMembers.map((member) => (
              <tr key={member._id}>
                <td>{member.firstName} {member.lastName}</td>
                <td><img src={member.profilePic} alt={member.firstName} style={{ width: '50px', height: '50px' }} /></td>
                <td>{member.mobile}</td>
                <td>{member.age}</td>
                <td>{member.packageTaken}</td>
                <td>{member.trainer}</td>
                <td>{member.joined}</td>
                <td>
                  <button className="approve-button" onClick={() => handleApprove(member._id)}>Approve</button>
                </td>
                <td>
                  <button className="reject-button" onClick={() => handleReject(member._id)}>Reject</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApproveMember;