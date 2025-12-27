"use client";

import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  Switch,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Layout({ children, darkMode, setDarkMode }) {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton color="inherit" onClick={() => setOpen(true)}>
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Admin Panel
          </Typography>

          🌙
          <Switch
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
            color="default"
          />
        </Toolbar>
      </AppBar>

      <Drawer open={open} onClose={() => setOpen(false)}>
        <List sx={{ width: 220 }}>
          <ListItem button onClick={() => router.push("/")}>
            <ListItemText primary="Home" />
          </ListItem>

          <ListItem button onClick={() => router.push("/dashboard")}>
            <ListItemText primary="Dashboard" />
          </ListItem>

          <ListItem button onClick={() => router.push("/users")}>
            <ListItemText primary="Users" />
          </ListItem>
        </List>
      </Drawer>

      <Box sx={{ p: 3 }}>{children}</Box>
    </>
  );
}
