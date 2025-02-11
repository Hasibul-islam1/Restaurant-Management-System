import React, { useState } from "react";
import { Box, Typography, Grid, Card, CardContent, TextField, Button, List, ListItem, ListItemText } from "@mui/material";

const DashboardReview = () => {
  // Sample data for reviews
  const reviews = [
    { name: "John Doe", email: "john@example.com", message: "Great service, really loved the food!" },
    { name: "Jane Smith", email: "jane@example.com", message: "Had an amazing experience. Highly recommend!" },
    { name: "Sam Wilson", email: "sam@example.com", message: "Nice ambiance and delicious food." },
    { name: "Emily Johnson", email: "emily@example.com", message: "The food was wonderful and the service was top-notch." },
    { name: "Michael Brown", email: "michael@example.com", message: "A very pleasant dining experience. Will visit again!" },
    { name: "Sophia Lee", email: "sophia@example.com", message: "Absolutely loved the variety of the menu. Something for everyone." },
    { name: "David Martin", email: "david@example.com", message: "Excellent food and friendly staff. Highly recommend." },
    { name: "Olivia Taylor", email: "olivia@example.com", message: "The restaurant ambiance is amazing, and the food is perfect." },
    { name: "Daniel Harris", email: "daniel@example.com", message: "Great place to dine with family. The kids loved the food." },
  ];
  

  const [newMessage, setNewMessage] = useState("");

  // Handle new review message input
  const handleNewMessageChange = (event) => {
    setNewMessage(event.target.value);
  };

  // Add new review (for simplicity, this just adds the message to the list)
  const handleAddReview = () => {
    if (newMessage.trim()) {
      reviews.push({
        name: "New User",
        email: "newuser@example.com",
        message: newMessage,
      });
      setNewMessage("");
    }
  };

  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 3 }}>Customer Reviews</Typography>

      {/* Existing Reviews List */}
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 2 }}>Customer Feedback</Typography>
              <List>
                {reviews.map((review, index) => (
                  <ListItem key={index}>
                    <ListItemText
                      primary={`${review.name} - ${review.email}`}
                      secondary={review.message}
                    />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      
    </Box>
  );
};

export default DashboardReview;
