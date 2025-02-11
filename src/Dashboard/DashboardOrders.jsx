import React, { useState } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Button, Box } from "@mui/material";

const DashboardOrders = () => {
  // Dummy order data (Replace with API fetch)
  const [orders, setOrders] = useState([
    { id: 1, customer: "John Doe", table: 5, total: "$45.99", status: "Pending" },
    { id: 2, customer: "Jane Smith", table: 3, total: "$30.50", status: "Completed" },
    { id: 3, customer: "Alice Brown", table: 8, total: "$55.20", status: "Processing" },
  ]);

  // Delete order function
  const handleDelete = (id) => {
    const updatedOrders = orders.filter(order => order.id !== id);
    setOrders(updatedOrders);
  };

  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 2 }}>Manage Orders</Typography>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><b>Order ID</b></TableCell>
              <TableCell><b>Customer</b></TableCell>
              <TableCell><b>Table</b></TableCell>
              <TableCell><b>Total</b></TableCell>
              <TableCell><b>Status</b></TableCell>
              <TableCell><b>Actions</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell>{order.id}</TableCell>
                <TableCell>{order.customer}</TableCell>
                <TableCell>{order.table}</TableCell>
                <TableCell>{order.total}</TableCell>
                <TableCell>{order.status}</TableCell>
                <TableCell>
                  <Button variant="contained" color="primary" size="small" sx={{ mr: 1 }}>View</Button>
                  <Button variant="contained" color="secondary" size="small" sx={{ mr: 1 }}>Edit</Button>
                  <Button variant="contained" color="error" size="small" onClick={() => handleDelete(order.id)}>Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default DashboardOrders;
