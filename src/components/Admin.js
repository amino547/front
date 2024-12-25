import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Admin.css';
import { FaUsers, FaDumbbell, FaUserFriends, FaBox, FaCalendarAlt, FaChartPie, FaCalendarDay, FaCalendarWeek } from 'react-icons/fa';
import logo from '../assets/images/gy.jpg'; // Update the path to your logo

const AdminDashboard = () => {
  const [showDayContent, setShowDayContent] = useState(false);
  const [showWeekContent, setShowWeekContent] = useState(false);
  const [stats, setStats] = useState({
    members: 0,
    equipment: 0,
    trainers: 0,
    packages: 0,
  });
  const navigate = useNavigate();

  const attendanceReports = [3, 5, 7, 9, 6, 8, 10];

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const memberCount = await fetch('http://localhost:5000/api/members/count').then(res => res.json());
        const equipmentCount = await fetch('http://localhost:5000/api/equipment/count').then(res => res.json());
        const trainerCount = await fetch('http://localhost:5000/api/trainers/count').then(res => res.json());
        const packageCount = await fetch('http://localhost:5000/api/packages/count').then(res => res.json());

        setStats({
          members: memberCount.count,
          equipment: equipmentCount.count,
          trainers: trainerCount.count,
          packages: packageCount.count,
        });
      } catch (error) {
        console.error('Error fetching stats:', error);
      }
    };

    fetchStats();
  }, []);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <div className="admin-dashboardC addB">
      <div className="header1">
        <div className="header-left3">
          <h1>Admin</h1>
        </div>
        <div className="header-right1">
          <button className="logout-button1 user-info-button" onClick={handleLogout}>Logout</button>
        </div>
      </div>
      <div className="welcome-section1">
        <img src={logo} alt="Logo1" className="logo1" />
        <div className="welcome-text1">
          <h1>Hello Gymnast</h1>
          <p>Welcome to your admin dashboard</p>
        </div>
      </div>
      <div className="stats-cards3">
        <div className="card3" onClick={() => navigate('/members')}>
          <FaUsers className="card-icon1" />
          <h3>Members</h3>
          <p>{stats.members}</p>
        </div>
        <div className="card3" onClick={() => navigate('/equipment')}>
          <FaDumbbell className="card-icon2" />
          <h3>Equipment</h3>
          <p>{stats.equipment}</p>
        </div>
        <div className="card3" onClick={() => navigate('/trainers')}>
          <FaUserFriends className="card-icon3" />
          <h3>Trainers</h3>
          <p>{stats.trainers}</p>
        </div>
        <div className="card3" onClick={() => navigate('/packages')}>
          <FaBox className="card-icon4" />
          <h3>Packages</h3>
          <p>{stats.packages}</p>
        </div>
      </div>
      <div className="reports">
        <div className="report-section">
          <div className="report-header">
            <FaCalendarAlt className="report-icon" />
            <div>
              <h2>Attendance Reports</h2>
              <p>Last Seven Days Report</p>
            </div>
            <div className="report-icons">
              <FaCalendarDay
                className="icon"
                onClick={() => setShowDayContent(!showDayContent)}
              />
              <FaCalendarWeek
                className="icon"
                onClick={() => setShowWeekContent(!showWeekContent)}
              />
            </div>
          </div>
          <div className="bar-chart">
            {attendanceReports.map((report, index) => (
              <div key={index} className={`bar ${index < 3 ? 'blue' : 'orange'}`} style={{ height: `${report * 20}px` }}></div>
            ))}
          </div>
          {showDayContent && <div className="additional-content">Day Content Here</div>}
          {showWeekContent && <div className="additional-content">Week Content Here</div>}
        </div>
        <div className="report-section">
          <div className="report-header">
            <FaChartPie className="report-icon" />
            <h2>Total Reports</h2>
            <div className="legend">
              <div className="legend-item member">Member</div>
              <div className="legend-item trainer">Trainer</div>
              <div className="legend-item equipment">Equipment</div>
              <div className="legend-item package">Package</div>
            </div>
          </div>
          <div className="pie-chart">
            <div className="slice member" style={{ '--value': stats.members }}></div>
            <div className="slice trainer" style={{ '--value': stats.trainers }}></div>
            <div className="slice equipment" style={{ '--value': stats.equipment }}></div>
            <div className="slice package" style={{ '--value': stats.packages }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;