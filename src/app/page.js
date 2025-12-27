"use client";

import { Button, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <Typography variant="h4">
        Frontend Technical Assessment
      </Typography>

      <Button
        variant="contained"
        sx={{ mt: 3 }}
        onClick={() => router.push("/login")}
      >
        Go to Login
      </Button>
    </div>
  );
}
