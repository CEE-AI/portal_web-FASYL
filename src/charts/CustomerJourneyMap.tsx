// charts/CustomerJourneyMap.js
import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const data = [
  { timestamp: "2024-01-01", interactions: 12 },
  { timestamp: "2024-01-02", interactions: 15 },
  { timestamp: "2024-01-03", interactions: 20 },
  { timestamp: "2024-01-04", interactions: 18 },
  { timestamp: "2024-01-05", interactions: 25 },
];

const CustomerJourneyMap = () => (
  <LineChart width={600} height={300} data={data}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="timestamp" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Line type="monotone" dataKey="interactions" stroke="#8884d8" activeDot={{ r: 8 }} />
  </LineChart>
);

export default CustomerJourneyMap;
