import { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Menu,
  MenuItem,
  Avatar,
  Tooltip,
  Container,
} from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { WbSunny, NightsStay } from "@mui/icons-material";
import { useRouter } from "next/navigation";

// Define the types for the props
interface NavbarProps {
  mode: "light" | "dark";
  toggleMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ mode, toggleMode }) => {
  const router = useRouter();

  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const [username, setUsername] = useState(""); // To store the user's name
  const [currentTime, setCurrentTime] = useState(""); // To store the time and day of the week

  useEffect(() => {
    // Get the username from localStorage
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }

    // Function to update the current time and day
    const updateTime = () => {
      const now = new Date();
      const dayOfWeek = now.toLocaleDateString(undefined, { weekday: "long" });
      const time = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
      setCurrentTime(`${dayOfWeek}, ${time}`);
    };

    // Update time every second
    const timer = setInterval(updateTime, 1000);
    updateTime(); // Call it once immediately

    // Clean up timer when component is unmounted
    return () => clearInterval(timer);
  }, []);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = () => {
    console.log("Logout clicked");
    localStorage.removeItem("username");
    localStorage.removeItem("role");
    localStorage.removeItem("token");
    router.push("/login");
  };

  return (
    <AppBar
      position="static"
      sx={{
        bgcolor: mode === "light" ? "white" : "black", // Dynamic background color based on the mode
        color: mode === "light" ? "black" : "white", // Dynamic text color
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          {/* Time and Day Display */}
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h6" sx={{ color: mode === "light" ? "black" : "white" }}>
              {currentTime}
            </Typography>
          </Box>

          {/* Toggle Dark/Light Mode */}
          <IconButton onClick={toggleMode} sx={{ ml: 1, color: mode === "light" ? "black" : "white" }}>
            {mode === "light" ? <NightsStay /> : <WbSunny />}
          </IconButton>

          {/* User Menu with Avatar and Username */}
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt={username} sx={{ mr: 1 }} /> {/* User's avatar */}
                <Typography variant="body1" sx={{ color: mode === "light" ? "black" : "white", mr: 2 }}>
                  {username} {/* Display the username */}
                </Typography>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={handleCloseUserMenu}>
                <Typography textAlign="center">Profile</Typography>
              </MenuItem>
              <MenuItem onClick={handleLogout}>
                <LogoutIcon sx={{ mr: 1 }} />
                <Typography textAlign="center">Logout</Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
