"use client";

import { Typography, Button, Box } from "@mui/material";
import { useAuthStore } from "@/store/authStore";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DashboardPage() {
  const { token, logout } = useAuthStore();
  const router = useRouter();

  // 🔒 Protect dashboard route
  useEffect(() => {
    if (!token) {
      router.push("/login");
    }
  }, [token, router]);

  return (
    <Box sx={{ textAlign: "center", mt: 6 }}>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>

      {/* View Users Button */}
      <Button
        variant="contained"
        sx={{ mt: 2, mr: 2 }}
        onClick={() => router.push("/users")}
      >
        View Users
      </Button>

      {/* Logout Button */}
      <Button
        variant="outlined"
        color="error"
        sx={{ mt: 2 }}
        onClick={() => {
          logout();
          router.push("/login");
        }}
      >
        Logout
      </Button>
    </Box>
  );
}
