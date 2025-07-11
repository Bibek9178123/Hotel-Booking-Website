import React from "react";
import { Card, CardContent, CardMedia, Typography, Grid } from "@mui/material";

function HotelList({ hotels }) {
  if (!hotels.length) {
    return <Typography variant="h6">No hotels found.</Typography>;
  }
  return (
    <Grid container spacing={3}>
      {hotels.map((hotel) => (
        <Grid item xs={12} sm={6} md={4} key={hotel.id}>
          <Card>
            <CardMedia
              component="img"
              height="160"
              image={hotel.image}
              alt={hotel.name}
            />
            <CardContent>
              <Typography variant="h6">{hotel.name}</Typography>
              <Typography variant="body2" color="text.secondary">
                {hotel.location}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {hotel.description}
              </Typography>
              <Typography variant="subtitle1" color="primary">
                ${hotel.price} / night
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default HotelList;