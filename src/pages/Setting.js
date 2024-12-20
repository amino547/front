/* import React, { useContext, useState, useEffect } from 'react';
// import { AuthContext } from '../context/AuthContext'; 
// import { useNavigate } from 'react-router-dom';
// import './Setting.css';

// const Setting = () => {
//   const { state, dispatch } = useContext(AuthContext);
//   const navigate = useNavigate();
// console.log('state',state.user)
//   const [formData, setFormData] = useState({
//     firstName: state.firstName,
//     gender: state.gender,
//     age: state.age,
//     height: state.height,
//     weight: state.weight,
//     unitSystem: state.unitSystem,
//     language: state.language,
//     startOfWeek: state.startOfWeek,
//     email: state.email,
//     password: '',
//   });

//   const [error, setError] = useState(null);

//   useEffect(() => {
//     if (state.user && state.user._id) {
     
//       fetchSettings(state.user._id);
//     }
//   }, [state.user]);

//   const fetchSettings = async (userId) => {
//     try {
//       const response = await fetch(`http://localhost:5000/user/settings/${userId}`, {
//         method: 'GET',
//         headers: {
//           'Authorization': `Bearer ${localStorage.getItem('token')}`,
//         },
//       });

//       const data = await response.json();

//       if (response.ok) {
        
//         setFormData({
//           firstName: data.firstName,
//           gender: data.gender,
//           age: data.age,
//           height: data.height,
//           weight: data.weight,
//           unitSystem: data.unitSystem,
//           language: data.language,
//           startOfWeek: data.startOfWeek,
//           email: data.email,
//           password: '',
//         });
//       } else {
//         setError(data.msg || 'Failed to fetch settings');
//       }
//     } catch (err) {
//       console.error('Error fetching settings:', err);
//       setError('Failed to connect to the server. Please try again later.');
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSaveSettings = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch(`http://localhost:5000/user/settings/${state.user._id}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${localStorage.getItem('token')}`, 
//         },
//         body: JSON.stringify(formData),
//       });

//       const data = await response.json();

//       if (response.ok) {
        
//         dispatch({ type: 'UPDATE_USER_PROFILE', payload: formData });

        
//         localStorage.setItem('user', JSON.stringify({ ...state.user, ...formData }));

//         alert('Settings updated successfully');
//       } else {
//         setError(data.msg || 'Failed to update settings');
//       }
//     } catch (err) {
//       console.error('Error updating settings:', err);
//       setError('Failed to connect to the server. Please try again later.');
//     }
//   };

//   const handleLogout = () => {
//     dispatch({ type: 'LOGOUT' });
//     localStorage.removeItem('token');
//     localStorage.removeItem('user');
//     navigate('/login');
//   };

//   return (
//     <div className="setting-section">
//       <div className="card-container">
//         <div className="card">
//           <h3>Profile</h3>
//           <div className="setting-item">
//             <span className="setting-label">First Name</span>
//             <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
//           </div>
//           <div className="setting-item">
//             <span className="setting-label">Gender</span>
//             <select name="gender" value={formData.gender} onChange={handleChange} required>
//               <option value="male">Male</option>
//               <option value="female">Female</option>
//               <option value="other">Other</option>
//             </select>
//           </div>
//           <div className="setting-item">
//             <span className="setting-label">Age</span>
//             <input type="number" name="age" value={formData.age} onChange={handleChange} required min="1" />
//           </div>
//           <div className="setting-item">
//             <span className="setting-label">Height</span>
//             <input type="number" name="height" value={formData.height} onChange={handleChange} required min="1" />
//           </div>
//           <div className="setting-item">
//             <span className="setting-label">Weight</span>
//             <input type="number" name="weight" value={formData.weight} onChange={handleChange} required min="1" />
//           </div>
//         </div>

//         <div className="card">
//           <h3>Application Settings</h3>
//           <div className="setting-item">
//             <span className="setting-label">System of Units</span>
//             <select name="unitSystem" value={formData.unitSystem} onChange={handleChange} required>
//               <option value="metric">Metric</option>
//               <option value="imperial">Imperial</option>
//             </select>
//           </div>
//           <div className="setting-item">
//             <span className="setting-label">Language</span>
//             <select name="language" value={formData.language} onChange={handleChange} required>
//               <option value="en">English</option>
//               <option value="ar">Arabic</option>
//               <option value="fr">French</option>
//             </select>
//           </div>
//           <div className="setting-item">
//             <span className="setting-label">Start of Week</span>
//             <input type="text" name="startOfWeek" value={formData.startOfWeek} onChange={handleChange} required />
//           </div>
//         </div>

//         <div className="card">
//           <h3>Account Details</h3>
//           <div className="setting-item">
//             <span className="setting-label">Email</span>
//             <input type="email" name="email" value={formData.email} onChange={handleChange} required />
//           </div>
//           <div className="account-details">
//             <button className="btn restore-btn" onClick={handleSaveSettings}>Save</button>
//             <button className="btn logout-btn" onClick={handleLogout}>Logout</button>
//           </div>
//         </div>
//       </div>
//       {error && <div className="error-message">{error}</div>}
//     </div>
//   );
// };*/

// export default Setting;

/*import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext'; 
import { useNavigate } from 'react-router-dom';
import './Setting.css';

const Setting = () => {
  const { state, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
console.log('state',state)
  // Debug: Voir l'état de l'utilisateur dans la console
  useEffect(() => {
    console.log('Current User State:', state.user);
  }, [state.user]);

  const [formData, setFormData] = useState({
    firstName: state.user?.firstName || '',
    gender: state.user?.gender || '',
    age: state.user?.age || '',
    height: state.user?.height || '',
    weight: state.user?.weight || '',
    unitSystem: state.user?.unitSystem || 'metric',
    language: state.user?.language || 'en',
    startOfWeek: state.user?.startOfWeek || 'monday',
    email: state.user?.email || '',
    password: '', // On ne charge pas le mot de passe existant
  });

  const [error, setError] = useState(null);

  useEffect(() => {
    if (state.user && state.user._id) {
      fetchSettings(state.user._id);
    }
  }, [state.user]);

  const fetchSettings = async (userId) => {
    try {
      const response = await fetch(`http://localhost:5000/user/settings/${userId}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      });

      const data = await response.json();

      if (response.ok) {
        setFormData({
          firstName: data.firstName,
          gender: data.gender,
          age: data.age,
          height: data.height,
          weight: data.weight,
          unitSystem: data.unitSystem,
          language: data.language,
          startOfWeek: data.startOfWeek,
          email: data.email,
          password: '',
        });
      } else {
        setError(data.msg || 'Failed to fetch settings');
      }
    } catch (err) {
      console.error('Error fetching settings:', err);
      setError('Failed to connect to the server. Please try again later.');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSaveSettings = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:5000/user/settings/${state.user._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`, 
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        dispatch({ type: 'UPDATE_USER_PROFILE', payload: formData });
        localStorage.setItem('user', JSON.stringify({ ...state.user, ...formData }));
        alert('Settings updated successfully');
      } else {
        setError(data.msg || 'Failed to update settings');
      }
    } catch (err) {
      console.error('Error updating settings:', err);
      setError('Failed to connect to the server. Please try again later.');
    }
  };

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <div className="setting-section">
      <div className="card-container">
        <div className="card">
          <h3>Profile</h3>
          <div className="setting-item">
            <span className="setting-label">First Name</span>
            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
          </div>
          <div className="setting-item">
            <span className="setting-label">Gender</span>
            <select name="gender" value={formData.gender} onChange={handleChange} required>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="setting-item">
            <span className="setting-label">Age</span>
            <input type="number" name="age" value={formData.age} onChange={handleChange} required min="1" />
          </div>
          <div className="setting-item">
            <span className="setting-label">Height</span>
            <input type="number" name="height" value={formData.height} onChange={handleChange} required min="1" />
          </div>
          <div className="setting-item">
            <span className="setting-label">Weight</span>
            <input type="number" name="weight" value={formData.weight} onChange={handleChange} required min="1" />
          </div>
        </div>

        <div className="card">
          <h3>Application Settings</h3>
          <div className="setting-item">
            <span className="setting-label">System of Units</span>
            <select name="unitSystem" value={formData.unitSystem} onChange={handleChange} required>
              <option value="metric">Metric</option>
              <option value="imperial">Imperial</option>
            </select>
          </div>
          <div className="setting-item">
            <span className="setting-label">Language</span>
            <select name="language" value={formData.language} onChange={handleChange} required>
              <option value="en">English</option>
              <option value="ar">Arabic</option>
              <option value="fr">French</option>
            </select>
          </div>
          <div className="setting-item">
            <span className="setting-label">Start of Week</span>
            <input type="text" name="startOfWeek" value={formData.startOfWeek} onChange={handleChange} required />
          </div>
        </div>

        <div className="card">
          <h3>Account Details</h3>
          <div className="setting-item">
            <span className="setting-label">Email</span>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="account-details">
            <button className="btn restore-btn" onClick={handleSaveSettings}>Save</button>
            <button className="btn logout-btn" onClick={handleLogout}>Logout</button>
          </div>
        </div>
      </div>
      {error && <div className="error-message">{error}</div>}
    </div>
  );
};

export default Setting;*/




import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import './Setting.css';

const Setting = () => {
  const { state, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    gender: '',
    age: '',
    height: '',
    weight: '',
    unitSystem: 'metric',
    language: 'en',
    startOfWeek: 'monday',
    email: '',
    password: '',
  });

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  // Check if user is authenticated and fetch user settings
  useEffect(() => {
    if (!state.user) {
      setError('User not authenticated. Please log in again.');
      setLoading(false);
      navigate('/settings'); // Redirect to login if not authenticated
    } else {
      fetchSettings(state.user._id); // Fetch user settings if authenticated
    }
  }, [state.user, navigate]);

  // Fetch user settings from the backend
  const fetchSettings = async (userId) => {
    if (!userId) {
      setError('User not authenticated. Please log in again.');
      setLoading(false);
      return;
    }

    const token = localStorage.getItem('token');
    if (!token) {
      setError('Authentication error. Please log in again.');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(`http://localhost:5000/user/settings/${userId}`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.msg || 'Failed to fetch settings');
      }

      const data = await response.json();
      setFormData({
        firstName: data.firstName || '',
        gender: data.gender || '',
        age: data.age || '',
        height: data.height || '',
        weight: data.weight || '',
        unitSystem: data.unitSystem || 'metric',
        language: data.language || 'en',
        startOfWeek: data.startOfWeek || 'monday',
        email: data.email || '',
        password: '', // Avoid fetching/displaying hashed password
      });
    } catch (err) {
      console.error('Error fetching settings:', err.message);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle saving updated settings to the backend
  const handleSaveSettings = async (e) => {
    e.preventDefault();

    // Basic form validation
    if (!formData.firstName || !formData.gender || !formData.age || !formData.height || !formData.weight || !formData.email) {
      setError('Please fill in all required fields.');
      return;
    }

    const token = localStorage.getItem('token');
    if (!token) {
      setError('Authentication error. Please log in again.');
      return;
    }

    // Remove the password field if it hasn't been updated
    const payload = { ...formData };
    if (!payload.password) {
      delete payload.password; // Avoid sending empty password if not updated
    }

    setSaving(true); // Set saving state to true

    try {
      const response = await fetch(`http://localhost:5000/user/settings/${state.user._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.msg || 'Failed to update settings');
      }

      const data = await response.json();
      dispatch({ type: 'UPDATE_USER', payload: data.user });
      localStorage.setItem('user', JSON.stringify(data.user));
      setError(null); // Clear any previous errors
      alert('Settings updated successfully');
    } catch (err) {
      console.log('Error updating settings:', err.message);
      setError(err.message);
    } finally {
      setSaving(false); // Set saving state to false
    }
  };

  // Handle logout
  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/signin');
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="setting-section">
      <div className="card-container">
        <div className="card">
          <h3>Profile</h3>
          <label>
            First Name:
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              placeholder="First Name"
            />
          </label>
          <label>
            Gender:
            <select name="gender" value={formData.gender} onChange={handleChange} required>
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </label>
          <label>
            Age:
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              required
              placeholder="Age"
            />
          </label>
          <label>
            Height:
            <input
              type="number"
              name="height"
              value={formData.height}
              onChange={handleChange}
              required
              placeholder="Height"
            />
          </label>
          <label>
            Weight:
            <input
              type="number"
              name="weight"
              value={formData.weight}
              onChange={handleChange}
              required
              placeholder="Weight"
            />
          </label>
          <label>
            Unit System:
            <select name="unitSystem" value={formData.unitSystem} onChange={handleChange}>
              <option value="metric">Metric</option>
              <option value="imperial">Imperial</option>
            </select>
          </label>
          <label>
            Language:
            <select name="language" value={formData.language} onChange={handleChange}>
              <option value="en">English</option>
              <option value="fr">French</option>
            </select>
          </label>
          <label>
            Start of Week:
            <select name="startOfWeek" value={formData.startOfWeek} onChange={handleChange}>
              <option value="sunday">Sunday</option>
              <option value="monday">Monday</option>
            </select>
          </label>
        </div>

        <div className="card">
          <h3>Account Details</h3>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Email"
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              name="password"
              placeholder="Leave blank to keep current password"
              value={formData.password}
              onChange={handleChange}
            />
          </label>
          <button className="btn save-btn" onClick={handleSaveSettings} disabled={saving}>
            {saving ? 'Saving...' : 'Save'}
          </button>
          <button className="btn logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
      {error && <div className="error-message">{error}</div>}
    </div>
  );
};

export default Setting;