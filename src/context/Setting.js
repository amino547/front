import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import './Signup.css';

const Signup = () => {
  const { state, dispatch } = useContext(AuthContext);

  

  return (
    <div className="signup-page">
      <h1>Sign Up</h1>
      {/* Your component JSX here */}
    </div>
  );
};

export default Signup;

