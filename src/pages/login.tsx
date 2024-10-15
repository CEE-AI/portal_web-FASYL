import { Button, TextField, Box, Container, Backdrop } from "@mui/material";
import { useAuth } from "../context/AuthContext"; // Ensure your AuthContext is set up
import { useTranslation } from "react-i18next";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/router"; // Import useRouter
import { useTheme } from "@mui/material/styles";
import { useState } from "react"; // Import useState for managing the loading state
import Logo from "@/components/Logo";

const Login = () => {
  const { login } = useAuth();
  const { t } = useTranslation();
  const router = useRouter(); // Initialize useRouter
  const theme = useTheme(); // Get the current theme
  const [loading, setLoading] = useState(false); // State to control loader

  // Formik setup
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required(t("Username is required")),
      password: Yup.string().required(t("Password is required")),
    }),
    onSubmit: async (values: any) => {
      setLoading(true); // Show loader when form is submitted

      // Add a delay to simulate the loading process
      setTimeout(() => {
        try {
          // Simulate a successful login response for demo purposes
          const response = 200; // Replace with actual API call

          // Store username in local storage
          localStorage.setItem("username", values.username);

          if (response === 200) {
            login("dummy-token", "Auth"); // Simulate login; adjust based on your API response
            router.push("/token");
          }
        } catch (error) {
          console.error("Login failed:", error);
        } finally {
          setLoading(false); // Hide loader after process
        }
      }, 3000); // 3-second delay to simulate login process
    },
  });

  return (
    <Container
      style={{
        backgroundImage: `url('/images/acees.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      {/* Backdrop component for loading */}
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading} // Show backdrop when loading is true
      >
        {/* Rotating loader image */}
        <img
          src="/images/launcher.png" // Path to your loading image
          alt="Loading..."
          style={{
            width: 100, // Adjust width as needed
            height: 100, // Adjust height as needed
            animation: 'spin 1s linear infinite', // Rotate continuously
          }}
        />
      </Backdrop>

      <Box
        component="form"
        onSubmit={formik.handleSubmit}
        sx={{
          bgcolor: theme.palette.background.paper, // Use theme background
          p: 4,
          borderRadius: 2,
          boxShadow: 3,
          position: "relative",
          opacity: 0.9,
        }}
      >
        <Logo />
        <TextField
          label="Username"
          variant="outlined"
          fullWidth
          margin="normal"
          id="username"
          name="username"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.username}
          error={formik.touched.username && Boolean(formik.errors.username)}
          helperText={formik.touched.username && formik.errors.username !== null && typeof formik.errors.username === 'string' ? formik.errors.username : ''}
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: theme.palette.mode === "dark" ? "#444" : "#ccc",
              },
              "&:hover fieldset": {
                borderColor: theme.palette.primary.main,
              },
              "&.Mui-focused fieldset": {
                borderColor: theme.palette.primary.main,
              },
            },
            "& .MuiInputBase-input": {
              color: theme.palette.text.primary,
            },
          }}
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          id="password"
          name="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password !== null && typeof formik.errors.password === 'string' ? formik.errors.password : ''}
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: theme.palette.mode === "dark" ? "#444" : "#ccc",
              },
              "&:hover fieldset": {
                borderColor: theme.palette.primary.main,
              },
              "&.Mui-focused fieldset": {
                borderColor: theme.palette.primary.main,
              },
            },
            "& .MuiInputBase-input": {
              color: theme.palette.text.primary,
            },
          }}
        />
        <Button type="submit" variant="contained" fullWidth disabled={loading}>
          {t("login")}
        </Button>
      </Box>

      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </Container>
  );
};

export default Login;
