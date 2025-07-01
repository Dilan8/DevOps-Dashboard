// src/Dashboard.jsx
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: '10 AM', CPU: 40, Memory: 70 },
  { name: '11 AM', CPU: 60, Memory: 65 },
  { name: '12 PM', CPU: 45, Memory: 80 },
  { name: '1 PM', CPU: 70, Memory: 60 },
  { name: '2 PM', CPU: 55, Memory: 75 },
];

const Dashboard = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1 style={{ textAlign: 'center' }}>AWS Metrics Dashboard</h1>

      <div style={{ display: 'flex', gap: '20px', marginBottom: '30px' }}>
        <div style={{ background: '#f0f8ff', padding: '20px', flex: 1, borderRadius: '8px', color:'black' }}>
          <h3>CPU Usage</h3>
          <p>Current: 55%</p>
        </div>

        <div style={{ background: '#ffe4e1', padding: '20px', flex: 1, borderRadius: '8px', color:'black' }}>
          <h3>Memory Usage</h3>
          <p>Current: 75%</p>
        </div>
      </div>

      <div style={{ height: 300 }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="CPU" stroke="#8884d8" />
            <Line type="monotone" dataKey="Memory" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Dashboard;
