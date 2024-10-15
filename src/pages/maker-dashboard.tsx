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

const MakerDashboard = () => {
  const { userRole } = useAuth();
  const router = useRouter();

  // Redirect if the user role is not Maker
  useEffect(() => {
    if (userRole !== "Maker") {
      router.push("/login");
    }
  }, [userRole, router]);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#f4f4f4' }}>
      {/* Main Content */}
      <Container maxWidth="lg" sx={{ padding: '20px' }}>
        {/* Header */}
        <Box display="flex" justifyContent="space-between" alignItems="center" mb="20px">
          <Typography variant="h3" fontWeight="bold">
            Maker Dashboard
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
        <Grid container spacing={3} my="20px">
          <Grid item xs={12} sm={6} md={3}>
            <Box
              sx={{
                backgroundColor: "#2e13a6",
                p: "20px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 1,
                height: "100%",
              }}
            >
              <Typography variant="h6" color="#FFF">Total Requests</Typography>
              <Typography variant="h4" color="#FFF">250</Typography>
              <EmailIcon sx={{ color: "#FFF", fontSize: "26px" }} />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box
              sx={{
                backgroundColor: "#2e7d32",
                p: "20px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 1,
                height: "100%",
              }}
            >
              <Typography variant="h6" color="#FFF">Pending Approvals</Typography>
              <Typography variant="h4" color="#FFF">15</Typography>
              <PointOfSaleIcon sx={{ color: "#FFF", fontSize: "26px" }} />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box
              sx={{
                backgroundColor: "#c0b429",
                p: "20px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 1,
                height: "100%",
              }}
            >
              <Typography variant="h6" color="#FFF">Total Users</Typography>
              <Typography variant="h4" color="#FFF">41</Typography>
              <PersonAddIcon sx={{ color: "#FFF", fontSize: "26px" }} />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box
              sx={{
                backgroundColor: "#ff2a00",
                p: "20px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 1,
                height: "100%",
              }}
            >
              <Typography variant="h6" color="#FFF">Disabled Users</Typography>
              <Typography variant="h4" color="#FFF">4</Typography>
              <TrafficIcon sx={{ color: "#FFF", fontSize: "26px" }} />
            </Box>
          </Grid>
        </Grid>

        {/* Additional Content */}
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper sx={{ padding: 2 }}>
              <Typography variant="h6">Maker Activities Overview</Typography>
              <Typography variant="body1">Details about maker activities will go here.</Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default withAuth(MakerDashboard); // Wrap with HOC
