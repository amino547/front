import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './MemberPackage.css';

const MemberPackage = () => {
  const [memberPackages, setMemberPackages] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMemberPackages = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/members');
        const data = await response.json();
        setMemberPackages(data);
      } catch (error) {
        console.error('Error fetching member packages:', error);
      }
    };

    fetchMemberPackages();
  }, []);

  const handleEdit = (id) => {
    navigate(`/edit-member/${id}`);
  };

  return (
    <div className="container">
      <div className="headerB2">
        <div className="header-rightB2">
          <button className="logout-buttonB2 user-info-button">Logout</button>
        </div>
      </div>
      <div className="welcome-sectionB2">
        <div className="logo-containerB2">
          <img src={require('../assets/images/OIP.jpg')} alt="LogoB" className="logoB" />
        </div>
        <div className="welcome-textB2">
          <h1>Package Members</h1>
          <p>Fill in the details to add a new member</p>
        </div>
      </div>
      <div className="member-package-list">
        <h2>Member - Trainer List</h2>
        <table>
          <thead>
            <tr>
              <th>Member Name</th>
              <th>Member Pic</th>
              <th>Member Mobile</th>
              <th>Package Taken</th>
              <th>Package Amount</th>
              <th>Trainer Name</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {memberPackages.map((member) => (
              <tr key={member._id}>
                <td>{member.firstName} {member.lastName}</td>
                <td><img src={member.profilePic} alt={member.firstName} style={{ width: '50px', height: '50px' }} /></td>
                <td>{member.mobile}</td>
                <td>{member.packageTaken}</td>
                <td>{member.packageAmount}</td>
                <td>{member.trainer}</td>
                <td>
                  <button className="edit-button" onClick={() => handleEdit(member._id)}>Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MemberPackage;
