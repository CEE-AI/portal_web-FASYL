// import { createTheme } from "@mui/material/styles";

// const theme = (mode: "light" | "dark") =>
//   createTheme({
//     palette: {
//       mode,
//     },
//   });

// export default theme;

import { createTheme } from "@mui/material/styles";

const theme = (mode: "light" | "dark") =>
  createTheme({
    palette: {
      mode,
      // Define additional palette settings if necessary
      primary: {
        main: mode === "light" ? "#1976d2" : "#bb86fc", // Example for primary color
      },
      background: {
        default: mode === "light" ? "#fff" : "#121212", // Light mode: white, Dark mode: dark gray
        paper: mode === "light" ? "#fff" : "#1e1e1e", // Paper color for components
      },
      text: {
        primary: mode === "light" ? "#000" : "#fff", // Text color
      },
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: mode === "light" ? "#ccc" : "#444", // Border color for the fieldset
              },
              "&:hover fieldset": {
                borderColor: mode === "light" ? "#1976d2" : "#bb86fc", // Border color on hover
              },
              "&.Mui-focused fieldset": {
                borderColor: mode === "light" ? "#1976d2" : "#bb86fc", // Border color when focused
              },
            },
            "& .MuiInputBase-input": {
              color: mode === "light" ? "#000" : "#fff", // Input text color
            },
          },
        },
      },
    },
  });

export default theme;
