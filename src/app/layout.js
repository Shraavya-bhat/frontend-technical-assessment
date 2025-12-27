"use client";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useState } from "react";
import Layout from "@/components/Layout";

export default function RootLayout({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      primary: { main: "#1976d2" },
    },
    typography: {
      fontFamily: "Inter, Roboto, sans-serif",
    },
  });

  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Layout darkMode={darkMode} setDarkMode={setDarkMode}>
            {children}
          </Layout>
        </ThemeProvider>
      </body>
    </html>
  );
}
