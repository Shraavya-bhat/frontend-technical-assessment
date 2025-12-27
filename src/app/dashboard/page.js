"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Box,
  Container,
  Typography,
  Button
} from "@mui/material";
import { useAuthStore } from "@/store/authStore";

export default function DashboardPage() {
  const router = useRouter();
  const { token, logout } = useAuthStore();

  // Protect route
  useEffect(() => {
    if (!token) {
      router.push("/login");
    }
  }, [token, router]);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #667eea, #764ba2)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container maxWidth="sm">
        <Box
          sx={{
            p: 4,
            backgroundColor: "#fff",
            borderRadius: 3,
            boxShadow: 8,
            textAlign: "center",
          }}
        >
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Dashboard
          </Typography>

          <Typography color="text.secondary" mb={3}>
            Welcome! Manage users and application data here.
          </Typography>

          <Button
            variant="contained"
            sx={{ mr: 2 }}
            onClick={() => router.push("/users")}
          >
            View Users
          </Button>

          <Button
            variant="outlined"
            color="error"
            onClick={() => {
              logout();
              router.push("/login");
            }}
          >
            Logout
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
