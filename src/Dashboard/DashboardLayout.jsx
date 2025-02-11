import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { Box, Drawer, List, ListItem, ListItemText, AppBar, Toolbar, IconButton, Typography, CssBaseline, InputBase, Badge, Avatar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const drawerWidth = 240;

const DashboardLayout = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Toggle sidebar for mobile view
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Sidebar navigation links
  const menuItems = [
    { text: "Dashboard Home", path: "/dashboard" },
    { text: "Orders", path: "/dashboard/orders" },
    { text: "Tables", path: "/dashboard/tables" },
    { text: "Review", path: "/dashboard/review" },
    { text: "Logout", path: "/logout" },
  ];

  // Sidebar component
  const drawer = (
    <Box sx={{ width: drawerWidth, p: 2 }}>
      <Typography variant="h6" sx={{ mb: 2, color: "#e52b34" }}>
        Codx Admin Panel
      </Typography>
      <List>
        {menuItems.map((item, index) => (
          <ListItem button key={index} component={Link} to={item.path}>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      {/* Top Navbar */}
      <AppBar position="fixed" sx={{ width: { sm: `calc(100% - ${drawerWidth}px)` }, ml: { sm: `${drawerWidth}px` }, bgcolor: "#ffffff", boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)" }}>
        <Toolbar>
          {/* Menu button for mobile */}
          <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle} sx={{ mr: 2, display: { sm: "none" } }}>
            <MenuIcon />
          </IconButton>

          {/* Dashboard Title */}
          <Typography variant="h4" sx={{ flexGrow: 1, fontWeight: 600, color: "#e52b34" }}>
            Dashboard
          </Typography>

          {/* Search Bar */}
          <Box sx={{ display: "flex", alignItems: "center", backgroundColor: "#f1f1f1", borderRadius: "5px", px: 2, width: 300 }}>
            <SearchIcon sx={{ color: "#888888" }} />
            <InputBase
              placeholder="Search..."
              sx={{ ml: 1, flex: 1, fontSize: "14px", color: "#333333" }}
            />
          </Box>

          {/* Notification Icon */}
          <IconButton color="inherit" sx={{ ml: 2 }}>
            <Badge badgeContent={4} color="error">
              <NotificationsIcon sx={{ color: "#333333" }} />
            </Badge>
          </IconButton>

          {/* Profile Icon */}
          <IconButton color="inherit" sx={{ ml: 2 }}>
            <Avatar sx={{ bgcolor: "#e52b34" }}>
              <AccountCircleIcon />
            </Avatar>
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Sidebar */}
      <Box component="nav" sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}>
        <Drawer variant="temporary" open={mobileOpen} onClose={handleDrawerToggle} ModalProps={{ keepMounted: true }} sx={{ display: { xs: "block", sm: "none" } }}>
          {drawer}
        </Drawer>
        <Drawer variant="permanent" sx={{ display: { xs: "none", sm: "block" }, "& .MuiDrawer-paper": { width: drawerWidth } }} open>
          {drawer}
        </Drawer>
      </Box>

      {/* Page Content */}
      <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8 }}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default DashboardLayout;


