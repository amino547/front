import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './ExerciseAnalysis.css';

const dataWomen = [
  { height: 55, frequency: 2 },
  { height: 60, frequency: 10 },
  { height: 65, frequency: 50 },
  { height: 70, frequency: 45 },
  { height: 75, frequency: 25 },
  { height: 80, frequency: 10 },
  { height: 85, frequency: 5 },
];

const dataMen = [
  { height: 55, frequency: 5 },
  { height: 60, frequency: 15 },
  { height: 65, frequency: 40 },
  { height: 70, frequency: 55 },
  { height: 75, frequency: 30 },
  { height: 80, frequency: 15 },
  { height: 85, frequency: 8 },
];

const ExerciseAnalysis = () => {
  return (
    <div className="exercise-analysis">
      <h2>Height Distribution by Gender</h2>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={dataWomen} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="height" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="frequency" stroke="#8884d8" activeDot={{ r: 8 }} name="Women" />
          <Line type="monotone" dataKey="frequency" stroke="#82ca9d" activeDot={{ r: 8 }} data={dataMen} name="Men" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ExerciseAnalysis;
