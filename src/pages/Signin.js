/*import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // Ensure the correct path to AuthContext
import './Signin.css';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('userId', data.userId);

        // Call the login function from AuthContext to update the authentication state
        login();

        // Redirect to the dashboard or home page
        navigate('/');
      } else {
        setError(data.error);
      }
    } catch (err) {
      setError('Something went wrong. Please try again later.');
    }
  };

  return (
    <div className='A'>
    <div className="signin-page">
      <h1>Sign In</h1>
      {error && <div className="error">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button type="submit">Sign In</button>
      </form>
      <p>
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </p>
    </div>
    </div>
  );
};


export default SignIn;*/


/*import React, { useState } from 'react';
import { useNavigate , Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Signin.css';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        login(data.token, data.userId);
        navigate('/dashboard');
      } else {
        setError(data.error);
      }
    } catch (err) {
      setError('Something went wrong. Please try again later.');
    }
  };

  return (
    <div className="signin-page">
      <h1>Sign In</h1>
      {error && <div className="error">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button type="submit">Sign In</button>
      </form>
      <p>
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </p>
    </div>
  );
};

export default SignIn;*/


// SignIn.js
// components/Signin.js



import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
//import './SignIn.css';

const SignIn = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleEmailChange = (e) => setEmail(e.target.value.trim());
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic client-side validation
    if (!email || !password) {
      setError('Please fill in all fields.');
      return;
    }

    try {
      // Endpoint determination
      const isAdmin = email.endsWith('@admin.com'); // Use a secure way to identify admin
      const adminEndpoint = 'http://localhost:5000/api/admins/login';
      const userEndpoint = 'http://localhost:5000/auth/login';
      const endpoint = isAdmin ? adminEndpoint : userEndpoint;

      console.log(`Attempting to log in as ${isAdmin ? 'admin' : 'user'} at ${endpoint}`);

      const response = await axios.post(endpoint, {
        email,
        password,
      });

      const data = response.data;
      if (data.token) {
        localStorage.setItem('token', data.token);
        if (!isAdmin) {
          localStorage.setItem('userId', data.userId);
        }

        // Update AuthContext
        login({ user: data.userId || data.adminId, token: data.token });

        // Redirect user
        navigate(isAdmin ? '/dashboardadmin' : '/');
      } else {
        setError(data.error || 'Invalid credentials.');
      }
    } catch (err) {
      console.error('Error logging in:', err);
      if (err.response) {
        // Server responded with a status other than 2xx
        setError(`Error: ${err.response.data.message || 'Unable to log in. Please check your credentials or try again later.'}`);
      } else if (err.request) {
        // No response was received
        setError('No response received from the server. Please try again later.');
      } else {
        // Something else went wrong
        setError('An error occurred. Please try again later.');
      }
    }
  };

  return (
    <div className='B'>
      <div className="signin-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group3">
            <label>Email:</label>
            <div className="input-container3">
              <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
              <input className='in'
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="form-group3">
            <label>Password:</label>
            <div className="input-container3">
              <FontAwesomeIcon icon={faLock} className="input-icon" />
              <input className='in'
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="form-group3-checkbox">
            <input type="checkbox" id="rememberMe" />
            <label htmlFor="rememberMe">Remember me</label>
            <a href="#" className="forgot-password1">Forgot Password?</a>
          </div>
          <button className="login-button3" type="submit">Login</button>
          
        </form>
        <p>
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </p>
      <Link to="/admin" > Admin </Link>
      </div>
    </div>
  );
};

export default SignIn;






