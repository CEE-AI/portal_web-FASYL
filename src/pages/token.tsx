import { Button, TextField, Typography, Box, Container, Backdrop } from "@mui/material";
import { useState, useEffect } from "react";
import withAuth from "../hoc/withAuth";
import { useRouter } from "next/navigation";

const Token = () => {
  const [tokenInput, setTokenInput] = useState("");
  const [role, setRole] = useState("");
  const [loading, setLoading] = useState(false); // State for loader
  const router = useRouter();

  useEffect(() => {
    const storedRole = localStorage.getItem("role");
    if (storedRole) {
      setRole(storedRole);
    } else {
      router.push("/login");
    }
  }, [router]);

  const handleSubmit = () => {
    setLoading(true); // Start the loader when button is clicked

    // Simulate token validation process with a delay
    setTimeout(() => {
      const username = localStorage.getItem("username");
      const role = localStorage.getItem("role");
      console.log("Username from local storage:", username);
      console.log("Token submitted:", tokenInput);

      if (tokenInput === "valid-token") {
        console.log("i came here ", role);
        switch (role) {
          case "control":
            router.push("/control-dashboard");
            break;
          case "user":
            router.push("/dashboard/user");
            break;
          case "editor":
            router.push("/dashboard/editor");
            break;
          case "viewer":
            router.push("/dashboard/viewer");
            break;
          case "guest":
            router.push("/dashboard/guest");
            break;
          default:
            router.push("/dashboard");
        }
      } else {
        console.error("Invalid token");
      }

      setLoading(false); // Stop the loader after the process
    }, 3000); // Simulate 3 seconds delay for token validation
  };

  return (
    <Container
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      {/* Backdrop loader */}
      <Backdrop sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }} open={loading}>
        <img
          src="/images/launcher.png" // Path to your loading image
          alt="Loading..."
          style={{
            width: 100, // Adjust size as necessary
            height: 100,
            animation: "spin 1s linear infinite", // Add spinning effect
          }}
        />
      </Backdrop>

      <Box
        sx={{
          bgcolor: "background.paper",
          p: 4,
          borderRadius: 2,
          boxShadow: 3,
          position: "relative",
        }}
      >
        <Typography variant="h4" align="center" sx={{ mb: 2 }}>
          Token Validation
        </Typography>
        <TextField
          label="Enter Token"
          variant="outlined"
          fullWidth
          margin="normal"
          value={tokenInput}
          onChange={(e) => setTokenInput(e.target.value)}
        />
        <Button variant="contained" fullWidth onClick={handleSubmit} disabled={loading}>
          Submit Token
        </Button>
      </Box>

      {/* Add CSS for the spinning effect */}
      <style jsx global>{`
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </Container>
  );
};

export default withAuth(Token);
