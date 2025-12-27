"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Box,
  Container,
  TextField,
  Button,
  Typography
} from "@mui/material";
import { useAuthStore } from "@/store/authStore";

export default function LoginPage() {
  const router = useRouter();
  const login = useAuthStore((state) => state.login);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    if (!username || !password) {
      setError("Please enter username and password");
      return;
    }

    try {
      await login(username, password);
      router.push("/dashboard");
    } catch (err) {
      setError("Invalid credentials");
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #667eea, #764ba2)",
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
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Admin Login
          </Typography>

          <Typography variant="body2" color="text.secondary" mb={3}>
            Sign in to access the dashboard
          </Typography>

          <TextField
            label="Username"
            fullWidth
            margin="normal"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <TextField
            label="Password"
            type="password"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && (
            <Typography color="error" mt={1}>
              {error}
            </Typography>
          )}

          <Button
            variant="contained"
            fullWidth
            sx={{ mt: 3, py: 1.2 }}
            onClick={handleLogin}
          >
            Login
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
