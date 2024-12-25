import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import './SignIn1.css';

const SignIn1 = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/admins/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: email, password }),
      });
      const data = await response.json();
      if (data.token) {
        localStorage.setItem('token', data.token);
        navigate('/dashboardadmin');
      } else {
        alert('Invalid credentials');
      }
    } catch (error) {
      console.error('Error logging in:', error);
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
        
      </div>
    </div>
  );
};

export default SignIn1;