"use client";

import {
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  Pagination,
  Box,
} from "@mui/material";
import { useEffect, useState } from "react";

export default function UsersPage() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const rowsPerPage = 5;

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data.users));
  }, []);

  const filteredUsers = users.filter((u) =>
    `${u.firstName} ${u.lastName}`.toLowerCase().includes(search.toLowerCase())
  );

  const paginatedUsers = filteredUsers.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );

  return (
    <Container>
      <Typography variant="h4" fontWeight="bold" mb={2}>
        Users List
      </Typography>

      <TextField
        label="Search users"
        fullWidth
        sx={{ mb: 3 }}
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setPage(1);
        }}
      />

      <TableContainer component={Paper}>
        <Table>
          <TableHead sx={{ backgroundColor: "#f0f2f5" }}>
            <TableRow>
              <TableCell><b>ID</b></TableCell>
              <TableCell><b>Name</b></TableCell>
              <TableCell><b>Email</b></TableCell>
              <TableCell><b>Age</b></TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {paginatedUsers.map((u) => (
              <TableRow key={u.id} hover>
                <TableCell>{u.id}</TableCell>
                <TableCell>{u.firstName} {u.lastName}</TableCell>
                <TableCell>{u.email}</TableCell>
                <TableCell>{u.age}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Box display="flex" justifyContent="center" mt={3}>
        <Pagination
          count={Math.ceil(filteredUsers.length / rowsPerPage)}
          page={page}
          onChange={(e, value) => setPage(value)}
          color="primary"
        />
      </Box>
    </Container>
  );
}
