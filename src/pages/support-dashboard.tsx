import { Box, Typography, Grid, Paper, Button, Container } from "@mui/material";
import withAuth from "../hoc/withAuth"; // Import the HOC
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/router";
import { useEffect } from "react";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";

const SupportDashboard = () => {
  const { userRole } = useAuth();
  const router = useRouter();

  // Redirect if the user role is not Support
  useEffect(() => {
    if (userRole !== "Support") {
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
              Support Dashboard
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
            <Box gridColumn="span 3" backgroundColor="#2e13a6" p="20px" display="flex" alignItems="center" justifyContent="center">
              <Box textAlign="center">
                <Typography variant="h6" color="#FFF">Open Tickets</Typography>
                <Typography variant="h4" color="#FFF">30</Typography>
                <EmailIcon sx={{ color: "#FFF", fontSize: "26px" }} />
              </Box>
            </Box>
            <Box gridColumn="span 3" backgroundColor="#2e7d32" p="20px" display="flex" alignItems="center" justifyContent="center">
              <Box textAlign="center">
                <Typography variant="h6" color="#FFF">Resolved Tickets</Typography>
                <Typography variant="h4" color="#FFF">120</Typography>
                <PointOfSaleIcon sx={{ color: "#FFF", fontSize: "26px" }} />
              </Box>
            </Box>
            <Box gridColumn="span 3" backgroundColor="#c0b429" p="20px" display="flex" alignItems="center" justifyContent="center">
              <Box textAlign="center">
                <Typography variant="h6" color="#FFF">Total Users</Typography>
                <Typography variant="h4" color="#FFF">41</Typography>
                <PersonAddIcon sx={{ color: "#FFF", fontSize: "26px" }} />
              </Box>
            </Box>
            <Box gridColumn="span 3" backgroundColor="#ff2a00" p="20px" display="flex" alignItems="center" justifyContent="center">
              <Box textAlign="center">
                <Typography variant="h6" color="#FFF">Escalated Tickets</Typography>
                <Typography variant="h4" color="#FFF">5</Typography>
                <TrafficIcon sx={{ color: "#FFF", fontSize: "26px" }} />
              </Box>
            </Box>
          </Box>

          {/* Additional Content */}
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper sx={{ padding: 2 }}>
                <Typography variant="h6">Support Ticket Overview</Typography>
                <Typography variant="body1">Details about support tickets will go here.</Typography>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default withAuth(SupportDashboard); // Wrap with HOC
