import { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "../context/AuthContext";
import { CssBaseline, ThemeProvider, Box, Container } from "@mui/material";
import theme from "../utils/theme";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { appWithTranslation } from "next-i18next";
import { useState } from "react";
import { useRouter } from "next/router";
import { SidebarProvider } from "../context/SidebarContext"; // Import SidebarProvider

const queryClient = new QueryClient();

function Iso20022({ Component, pageProps }: AppProps) {
  const [mode, setMode] = useState<"light" | "dark">("light");
  const router = useRouter();

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  const noNavbarPages = ["/login", "/token"];

  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme(mode)}>
          <CssBaseline />

          <SidebarProvider>
            {/* Main Layout Container */}
            <Box
              display="flex"
              minHeight="100vh"
              sx={{
                backgroundColor: mode === "light" ? "#f4f6f8" : "#121212",
              }}
            >
            {/* Sidebar */}
            {!noNavbarPages.includes(router.pathname) && (
            <Sidebar themeMode={"light"} /> // Only render Sidebar once
              )}
              {/* Main Content Area */}
              <Box flexGrow={1} display="flex" flexDirection="column">
                {/* Conditional rendering of Navbar */}
                {!noNavbarPages.includes(router.pathname) && (
                  <Navbar mode={mode} toggleMode={toggleMode} />
                )}

                {/* Page Content */}
                <Box
                  component="main"
                  flexGrow={1}
                  padding={3}
                  sx={{
                    backgroundColor: mode === "light" ? "#f4f6f8" : "#1e1e2d",
                  }}
                >
                  <Container maxWidth="xl">
                    <Component {...pageProps} />
                  </Container>
                </Box>
              </Box>
            </Box>
          </SidebarProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </AuthProvider>
  );
}

export default appWithTranslation(Iso20022);
