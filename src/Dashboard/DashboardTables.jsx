import React, { useState } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Button, Box } from "@mui/material";

const DashboardTables = () => {
  // Dummy table data (Replace with API fetch)
  const [tables, setTables] = useState([
    { id: 1, number: "Table 1", capacity: 4, status: "Available" },
    { id: 2, number: "Table 2", capacity: 2, status: "Occupied" },
    { id: 3, number: "Table 3", capacity: 6, status: "Reserved" },
  ]);

  // Delete table function
  const handleDelete = (id) => {
    const updatedTables = tables.filter(table => table.id !== id);
    setTables(updatedTables);
  };

  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 2 }}>Manage Tables</Typography>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><b>Table ID</b></TableCell>
              <TableCell><b>Table Number</b></TableCell>
              <TableCell><b>Capacity</b></TableCell>
              <TableCell><b>Status</b></TableCell>
              <TableCell><b>Actions</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tables.map((table) => (
              <TableRow key={table.id}>
                <TableCell>{table.id}</TableCell>
                <TableCell>{table.number}</TableCell>
                <TableCell>{table.capacity}</TableCell>
                <TableCell>{table.status}</TableCell>
                <TableCell>
                  <Button variant="contained" color="primary" size="small" sx={{ mr: 1 }}>View</Button>
                  <Button variant="contained" color="secondary" size="small" sx={{ mr: 1 }}>Edit</Button>
                  <Button variant="contained" color="error" size="small" onClick={() => handleDelete(table.id)}>Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default DashboardTables;
