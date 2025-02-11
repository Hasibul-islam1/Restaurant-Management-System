import React from "react";
import { Box, Typography, Grid, Card, CardContent } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import TableRestaurantIcon from "@mui/icons-material/TableRestaurant";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import PeopleIcon from "@mui/icons-material/People";

const DashboardHome = () => {
  // Dummy statistics (Replace with API fetch)
  const stats = [
    { title: "Total Orders", value: 120, color: "#2196f3", icon: <ShoppingCartIcon fontSize="large" /> },
    { title: "Available Tables", value: 8, color: "#4caf50", icon: <TableRestaurantIcon fontSize="large" /> },
    { title: "Total Revenue", value: "$5,200", color: "#ff9800", icon: <AttachMoneyIcon fontSize="large" /> },
    { title: "Total Customers", value: 340, color: "#f44336", icon: <PeopleIcon fontSize="large" /> },
  ];

  // Dummy data for Most Selling Items and Recent Customers
  const mostSellingItems = [
    { name: "Pizza Margherita", sold: 85 },
    { name: "Pasta Carbonara", sold: 72 },
    { name: "Caesar Salad", sold: 45 },
    { name: "Grilled Chicken", sold: 39 },
  ];

  const recentCustomers = [
    { name: "John Doe", date: "2025-02-10" },
    { name: "Jane Smith", date: "2025-02-09" },
    { name: "Michael Lee", date: "2025-02-08" },
    { name: "Sara Park", date: "2025-02-07" },
  ];

  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 3 }}>Dashboard Overview</Typography>

      {/* Stats Section */}
      <Grid container spacing={3}>
        {stats.map((stat, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card sx={{ backgroundColor: stat.color, color: "white", textAlign: "center", p: 2 }}>
              <CardContent>
                {stat.icon}
                <Typography variant="h6" sx={{ mt: 1 }}>{stat.title}</Typography>
                <Typography variant="h4">{stat.value}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Most Selling Items Section */}
      <Box sx={{ mt: 5 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>Most Selling Items</Typography>
        <Grid container spacing={3}>
          {mostSellingItems.map((item, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card sx={{ p: 2, boxShadow: 2 }}>
                <CardContent>
                  <Typography variant="body1">{item.name}</Typography>
                  <Typography variant="h6" sx={{ color: "#2196f3" }}>Sold: {item.sold}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Recent Customers Section */}
      <Box sx={{ mt: 5 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>Recent Customers</Typography>
        <Grid container spacing={3}>
          {recentCustomers.map((customer, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card sx={{ p: 2, boxShadow: 2 }}>
                <CardContent>
                  <Typography variant="body1">{customer.name}</Typography>
                  <Typography variant="body2" sx={{ color: "#888" }}>Visited: {customer.date}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default DashboardHome;
