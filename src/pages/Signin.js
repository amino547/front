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
import { useNavigate , Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Signin.css';

const SignIn = () => {
  const { dispatch, login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Determine the endpoint based on the email input
      const isAdmin = email.includes('@admin.com'); // Example condition to differentiate admin login
      const endpoint = isAdmin
        ? 'http://localhost:5000/api/admins/login'
        : 'http://localhost:5000/auth/login';

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(isAdmin ? { username: email, password } : { email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        localStorage.setItem('token', data.token);
        if (!isAdmin) {
          localStorage.setItem('userId', data.userId);
          // Call the login function from AuthContext to update the authentication state
          login();
        }

        // Redirect to the appropriate dashboard
        navigate(isAdmin ? '/dashboardadmin' : '/');
      } else {
        setError(data.error || 'Invalid credentials');
      }
    } catch (err) {
      setError('Something went wrong. Please try again later.');
    }
  };

  return (
    <div className='signin-page'>
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

export default SignIn;






