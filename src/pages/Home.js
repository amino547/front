import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to Management System Sport</h1>
      <p>
        This identifier is the home page of the gym for the management system. There will be many different features in this application. With artificial intelligence and system power, you will be able to reach your goal. With the professional and distinctive sports system, artificial intelligence will enable you to reach your goal and achieve your progress in a fast time. Let's start achieving a beautiful future and make your body more attractive and professional.
      </p>
      <Link to="/user-info" className="user-info-button20">
        Go to User Info
      </Link>
    </div>
  );
};

export default Home;
