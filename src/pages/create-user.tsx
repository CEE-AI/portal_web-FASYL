import { useState, useEffect } from "react";
import {
  Button,
  TextField,
  Box,
  Container,
  Typography,
  Grid,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import withAuth from "../hoc/withAuth"; // Import the HOC
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/router";

const UserCreation = () => {
  const { userRole } = useAuth();
  const router = useRouter();

  // Redirect if the user role is not Control
  useEffect(() => {
    if (userRole !== "Control") {
      router.push("/login");
    }
  }, [userRole, router]);

  const [userData, setUserData] = useState({
    username: "",
    Department: "",
    role: "", // For user role dropdown
    branchCode: "", // For branch code dropdown
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | { name?: string; value: unknown }>) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name as string]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Send the form data to the server or handle user creation logic
    console.log("User data submitted:", userData);
  };

  return (
    <Container maxWidth="md">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Create New User
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                value={userData.username}
                onChange={handleChange}
              />
            </Grid>
        
            <Grid item xs={12}>
            <TextField
                required
                fullWidth
                id="Department"
                label="Department"
                name="Department"
                autoComplete="Department"
                value={userData.Department}
                onChange={handleChange}
              />
            </Grid>

            {/* User Role Dropdown */}
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel id="role-label">User Role</InputLabel>
                <Select
                  labelId="role-label"
                  id="role"
                  name="role"
                  value={userData.role}
                  onChange={handleChange}
                  label="User Role"
                >
                  <MenuItem value="Control">Control</MenuItem>
                  <MenuItem value="Audit">Audit</MenuItem>
                  <MenuItem value="Authorizer">Authorizer</MenuItem>
                  <MenuItem value="Support">Support</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            {/* Branch Code Dropdown */}
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel id="branch-code-label">Branch Code</InputLabel>
                <Select
                  labelId="branch-code-label"
                  id="branchCode"
                  name="branchCode"
                  value={userData.branchCode}
                  onChange={handleChange}
                  label="Branch Code"
                >
                  <MenuItem value="01">01</MenuItem>
                  <MenuItem value="02">02</MenuItem>
                  <MenuItem value="03">03</MenuItem>
                  <MenuItem value="04">04</MenuItem>
                  <MenuItem value="05">05</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Create User
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default withAuth(UserCreation);
