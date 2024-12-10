import React, { useState } from 'react';
import Dashboard from '../components/Dashboard/Dashboard';
import SummaryCard from '../components/Dashboard/SummaryCard';
import StatsChart from '../components/Dashboard/StatsChart';
import DashboardVisualization from '../components/Dashboard/DashboardVisualization';
import './DashboardPage.css';

const DashboardPage = () => {
  const [activeSection, setActiveSection] = useState('dashboard');

  const sections = [
    { key: 'dashboard', label: 'Dashboard', component: <Dashboard /> },
    {
      key: 'summary',
      label: 'Summary Cards',
      component: (
        <div className="summary-cards">
          <SummaryCard title="Total Workouts" value="120" />
          <SummaryCard title="Calories Burned" value="5000 kcal" />
          <SummaryCard title="Average Duration" value="45 min" />
        </div>
      ),
    },
    { key: 'stats', label: 'Stats Chart', component: <StatsChart /> },
    {
      key: 'visualization',
      label: 'Visualization',
      component: <DashboardVisualization />,
    },
  ];

  return (
    <div className="dashboard-page3">
      <h1 className="dashboard-title">Dashboard</h1>
      <div className="navigation3">
        {sections.map(({ key, label }) => (
          <button
            key={key}
            onClick={() => setActiveSection(key)}
            className={activeSection === key ? 'active' : ''}
          >
            {label}
          </button>
        ))}
      </div>
      <div className="section-content">
        {sections.find((section) => section.key === activeSection)?.component}
      </div>
    </div>
  );
};

export default DashboardPage;



