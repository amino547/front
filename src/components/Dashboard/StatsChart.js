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
  Area,
} from 'recharts';
import './StatsChart.css';

const data = [
  { name: 'Jan', workouts: 10, calories: 200 },
  { name: 'Feb', workouts: 15, calories: 250 },
  { name: 'Mar', workouts: 20, calories: 300 },
  { name: 'Apr', workouts: 12, calories: 220 },
  { name: 'May', workouts: 18, calories: 280 },
  { name: 'Jun', workouts: 22, calories: 320 },
];

const StatsChart = () => {
  return (
    <div className="stats-chart">
      <h2>Workout Statistics</h2>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="workouts"
            stroke="#007BFF"
            activeDot={{ r: 8 }}
          />
          <Area
            type="monotone"
            dataKey="calories"
            fill="rgba(0, 123, 255, 0.2)"
            stroke="#007BFF"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StatsChart;




