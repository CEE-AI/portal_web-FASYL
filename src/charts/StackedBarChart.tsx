// charts/StackedBarChart.js
import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from "recharts";

const data = [
  { name: "Source A", leads: 400, retained: 240 },
  { name: "Source B", leads: 300, retained: 130 },
  { name: "Source C", leads: 200, retained: 80 },
  { name: "Source D", leads: 278, retained: 200 },
  { name: "Source E", leads: 189, retained: 90 },
];

const StackedBarChart = () => (
  <BarChart
    width={600}
    height={300}
    data={data}
    stackOffset="sign"
    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
  >
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Bar dataKey="leads" stackId="a" fill="#82ca9d" />
    <Bar dataKey="retained" stackId="a" fill="#8884d8" />
  </BarChart>
);

export default StackedBarChart;
