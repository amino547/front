import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from 'recharts';
import './DashboardVisualization.css';

const data = [
  { name: 'Jan', caloriesBurned: 300, steps: 3000, workout: 3.39 },
  { name: 'Feb', caloriesBurned: 219, steps: 3200, workout: 3.07 },
  { name: 'Mar', caloriesBurned: 330, steps: 3300, workout: 3.2 },
  { name: 'Apr', caloriesBurned: 250, steps: 3100, workout: 3.3 },
  { name: 'May', caloriesBurned: 350, steps: 3400, workout: 3.4 },
  { name: 'Jun', caloriesBurned: 320, steps: 3500, workout: 3.5 },
  { name: 'Jul', caloriesBurned: 310, steps: 3600, workout: 3.6 },
];

const pieData = [
  { name: 'Zone 1', value: 400, color: '#8884d8' },
  { name: 'Zone 2', value: 300, color: '#82ca9d' },
  { name: 'Zone 3', value: 300, color: '#ffc658' },
];

const DashboardVisualization = () => {
  return (
    <div className="dashboard-visualization">
      <div className="chart-container">
        <h2>Calories Burned</h2>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="caloriesBurned" stroke="#8884d8" activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="chart-container">
        <h2>Steps Taken</h2>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="steps" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="chart-container">
        <h2>Workout Rate</h2>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="workout" stroke="#ff8042" activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="chart-container">
        <h2>Calories Burned Zone</h2>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={pieData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={80}
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="chart-container">
        <h2>Steps Taken Zone</h2>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={pieData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={80}
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DashboardVisualization;




