import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ViewPackage.css';

const ViewPackage = () => {
  const [packages, setPackages] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/packages');
        const data = await response.json();
        setPackages(data);
      } catch (error) {
        console.error('Error fetching packages:', error);
      }
    };

    fetchPackages();
  }, []);

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:5000/api/packages/${id}`, {
        method: 'DELETE',
      });
      setPackages(packages.filter(pkg => pkg._id !== id));
    } catch (error) {
      console.error('Error deleting package:', error);
    }
  };

  return (
    <div className="containerQ ">
      <div className='head'>
        <div className='header-r'>
          <button className='logout-butt user-info-button'>Logout</button>
        </div>
        <div className='welcome-s'>
          <div className='logo-c'>
            <img
              src={require('../assets/images/R.jpg')}
              alt="Logo"
              className="log"
            />
          </div>
          <div className="welcome-tQ">
            <h1>View Packages</h1>
            <p>Manage Your Gym Packages</p>
          </div>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Duration</th>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {packages.map((pkg) => (
            <tr key={pkg._id}>
              <td>{pkg.name}</td>
              <td>{pkg.price}</td>
              <td>{pkg.duration}</td>
              <td>{pkg.description}</td>
              <td>
                <button className="edit-button" onClick={() => navigate(`/edit-package/${pkg._id}`)}>Edit</button>
              </td>
              <td><button onClick={() => handleDelete(pkg._id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewPackage;