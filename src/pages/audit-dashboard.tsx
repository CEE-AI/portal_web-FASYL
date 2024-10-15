import { Box, Typography, Grid, Paper, Button, Container } from "@mui/material"; 
import { Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import withAuth from "../hoc/withAuth"; // Import the HOC
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/router";
import { useEffect } from "react";
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
  Title,
  Tooltip,
  Legend,
  ArcElement
);

// Sample data for charts
const barData = {
  labels: ["January", "February", "March", "April", "May"],
  datasets: [
    {
      label: "Audited Transactions",
      data: [65, 59, 80, 81, 56],
      backgroundColor: "rgba(75, 192, 192, 0.6)",
    },
  ],
};

const pieData = {
  labels: ["Approved", "Pending", "Rejected"],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: ["#36A2EB", "#FF6384", "#FFCE56"],
      hoverBackgroundColor: ["#36A2EB", "#FF6384", "#FFCE56"],
    },
  ],
};

const AuditDashboard = () => {
  const { userRole } = useAuth();
  const router = useRouter();

  // Redirect if the user role is not Auditor
  useEffect(() => {
    if (userRole !== "Audit") {
      router.push("/login");
    }
  }, [userRole, router]);

  return (
    <Box sx={{ display: 'flex' }}>
      {/* Sidebar */}
      {/* <Sidebar /> */}

      {/* Main Content */}
      <Box sx={{ flexGrow: 1, padding: '20px', backgroundColor: '#f4f4f4', minHeight: '100vh' }}>
        <Container maxWidth="lg">
          <Box display="flex" justifyContent="space-between" alignItems="center" mb="20px">
            <Typography variant="h3" fontWeight="bold">
              Audit Dashboard
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
              component="div" 
              gridColumn="span 3" 
              sx={{ backgroundColor: "#2e13a6", p: "20px", display: "flex", alignItems: "center", justifyContent: "center" }}
            >
              <Box textAlign="center">
                <Typography variant="h6" color="#FFF">Total Audits</Typography>
                <Typography variant="h4" color="#FFF">12,361</Typography>
                <EmailIcon sx={{ color: "#FFF", fontSize: "26px" }} />
              </Box>
            </Box>
            <Box 
              component="div" 
              gridColumn="span 3" 
              sx={{ backgroundColor: "#2e7d32", p: "20px", display: "flex", alignItems: "center", justifyContent: "center" }}
            >
              <Box textAlign="center">
                <Typography variant="h6" color="#FFF">Pending Audits</Typography>
                <Typography variant="h4" color="#FFF">25</Typography>
                <PointOfSaleIcon sx={{ color: "#FFF", fontSize: "26px" }} />
              </Box>
            </Box>
            <Box 
              component="div" 
              gridColumn="span 3" 
              sx={{ backgroundColor: "#c0b429", p: "20px", display: "flex", alignItems: "center", justifyContent: "center" }}
            >
              <Box textAlign="center">
                <Typography variant="h6" color="#FFF">Total Users</Typography>
                <Typography variant="h4" color="#FFF">41</Typography>
                <PersonAddIcon sx={{ color: "#FFF", fontSize: "26px" }} />
              </Box>
            </Box>
            <Box 
              component="div" 
              gridColumn="span 3" 
              sx={{ backgroundColor: "#ff2a00", p: "20px", display: "flex", alignItems: "center", justifyContent: "center" }}
            >
              <Box textAlign="center">
                <Typography variant="h6" color="#FFF">Disabled Users</Typography>
                <Typography variant="h4" color="#FFF">4</Typography>
                <TrafficIcon sx={{ color: "#FFF", fontSize: "26px" }} />
              </Box>
            </Box>
          </Box>

          {/* Charts Grid */}
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Paper sx={{ padding: 2 }}>
                <Typography variant="h6">Monthly Audited Transactions</Typography>
                <Bar data={barData} options={{ responsive: true }} />
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper sx={{ padding: 2 }}>
                <Typography variant="h6">Audit Status</Typography>
                <Pie data={pieData} options={{ responsive: true }} />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default withAuth(AuditDashboard); // Wrap with HOC
