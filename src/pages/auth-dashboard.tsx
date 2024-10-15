import React, { useEffect, useState } from 'react';
import { Box, Typography, Grid, Paper, Button, Container, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { Bar, Line, Pie, Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend, ArcElement } from "chart.js"; 
import withAuth from "../hoc/withAuth";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/router";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";

// Register the components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement, // Register PointElement
  Title,
  Tooltip,
  Legend,
  ArcElement
);

// Sample data for charts
const barData = {
  labels: ["MT 101", "MT 202", "MT 300"],
  datasets: [
    {
      label: "Transactions",
      data: [65, 59, 80],
      backgroundColor: "rgba(75, 192, 192, 0.6)",
    },
  ],
};

const lineData = {
  labels: ["January", "February", "March", "April", "May"],
  datasets: [
    {
      label: "Authorized Transactions",
      data: [100, 150, 200, 180, 250],
      borderColor: "rgba(75, 192, 192, 0.6)",
      fill: false,
    },
  ],
};

const pieData = {
  labels: ["Authorized", "Pending", "Rejected"],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: ["#36A2EB", "#FF6384", "#FFCE56"],
      hoverBackgroundColor: ["#36A2EB", "#FF6384", "#FFCE56"],
    },
  ],
};

const donutData = {
  labels: ["Compliant", "Flagged"],
  datasets: [
    {
      data: [80, 20],
      backgroundColor: ["#36A2EB", "#FF6384"],
      hoverBackgroundColor: ["#36A2EB", "#FF6384"],
    },
  ],
};

const AuthDashboard = () => {
  const { userRole } = useAuth();
  const router = useRouter();
  const [dateRange, setDateRange] = useState("monthly");
  const [messageType, setMessageType] = useState("MT 101");
  const [authStatus, setAuthStatus] = useState("authorized");

  // Redirect if the user role is not Admin
  useEffect(() => {
    if (userRole !== "Auth") {
      router.push("/login");
    }
  }, [userRole, router]);

  return (
    <Box sx={{ display: 'flex' }}>
      {/* Sidebar */}
      {/* Main Content */}
      <Box sx={{ flexGrow: 1, padding: '20px', backgroundColor: '#f4f4f4', minHeight: '100vh' }}>
        <Container maxWidth="lg">
          <Box display="flex" justifyContent="space-between" alignItems="center" mb="20px">
            <Typography variant="h3" fontWeight="bold">
              AUTHORIZER DASHBOARD
            </Typography>
            <Button
              sx={{
                backgroundColor: "#007BFF",
                color: "#FFF",
                fontSize: "14px",
                fontWeight: "bold",
                padding: "10px 20px",
              }}
            >
              <DownloadOutlinedIcon sx={{ mr: "10px" }} />
              Download Reports
            </Button>
          </Box>
             {/* Stats Grid */}
             <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap="20px" my="20px">
            <Box 
              sx={{ 
                gridColumn: "span 3", 
                backgroundColor: "#2e13a6", 
                p: "20px", 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center" 
              }}
            >
              <Box textAlign="center">
                <Typography variant="h6" color="#FFF">Authorized Transactions</Typography>
                <Typography variant="h4" color="#FFF">12,361</Typography>
                <EmailIcon sx={{ color: "#FFF", fontSize: "26px" }} />
              </Box>
            </Box>
            <Box 
              sx={{ 
                gridColumn: "span 3", 
                backgroundColor: "#2e7d32", 
                p: "20px", 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center" 
              }}
            >
              <Box textAlign="center">
                <Typography variant="h6" color="#FFF">Audit Trails</Typography>
                <Typography variant="h4" color="#FFF">25</Typography>
                <PointOfSaleIcon sx={{ color: "#FFF", fontSize: "26px" }} />
              </Box>
            </Box>
            <Box 
              sx={{ 
                gridColumn: "span 3", 
                backgroundColor: "#c0b429", 
                p: "20px", 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center" 
              }}
            >
              <Box textAlign="center">
                <Typography variant="h6" color="#FFF">Total Users</Typography>
                <Typography variant="h4" color="#FFF">41</Typography>
                <PersonAddIcon sx={{ color: "#FFF", fontSize: "26px" }} />
              </Box>
            </Box>
            <Box 
              sx={{ 
                gridColumn: "span 3", 
                backgroundColor: "#ff2a00", 
                p: "20px", 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center" 
              }}
            >
              <Box textAlign="center">
                <Typography variant="h6" color="#FFF">Disabled Users</Typography>
                <Typography variant="h4" color="#FFF">4</Typography>
                <TrafficIcon sx={{ color: "#FFF", fontSize: "26px" }} />
              </Box>
            </Box>
          </Box>

          {/* Charts Grid */}

          {/* Filters */}
          <Grid container spacing={2} mb={4}>
            <Grid item xs={12} sm={4}>
              <FormControl fullWidth>
                <InputLabel>Date Range</InputLabel>
                <Select
                  value={dateRange}
                  onChange={(e) => setDateRange(e.target.value)}
                >
                  <MenuItem value="daily">Daily</MenuItem>
                  <MenuItem value="weekly">Weekly</MenuItem>
                  <MenuItem value="monthly">Monthly</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormControl fullWidth>
                <InputLabel>Message Type</InputLabel>
                <Select
                  value={messageType}
                  onChange={(e) => setMessageType(e.target.value)}
                >
                  <MenuItem value="MT 101">MT 101</MenuItem>
                  <MenuItem value="MT 202">MT 202</MenuItem>
                  <MenuItem value="MT 300">MT 300</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormControl fullWidth>
                <InputLabel>Authorization Status</InputLabel>
                <Select
                  value={authStatus}
                  onChange={(e) => setAuthStatus(e.target.value)}
                >
                  <MenuItem value="authorized">Authorized</MenuItem>
                  <MenuItem value="pending">Pending</MenuItem>
                  <MenuItem value="rejected">Rejected</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>

          {/* Charts */}
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Paper sx={{ padding: 2 }}>
                <Typography variant="h6">Total Authorized Over Time</Typography>
                <Line data={lineData} options={{ responsive: true }} />
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper sx={{ padding: 2 }}>
                <Typography variant="h6">Authorization Status</Typography>
                <Pie data={pieData} options={{ responsive: true }} />
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper sx={{ padding: 2 }}>
                <Typography variant="h6">Transaction Type Breakdown</Typography>
                <Bar data={barData} options={{ responsive: true }} />
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper sx={{ padding: 2 }}>
                <Typography variant="h6">Compliance Rate</Typography>
                <Doughnut data={donutData} options={{ responsive: true }} />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default withAuth(AuthDashboard); // Wrap with HOC
