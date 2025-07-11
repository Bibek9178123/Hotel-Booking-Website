import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Box,
  Typography,
  CardMedia,
  Button,
  Avatar,
  Chip,
  Grid,
} from "@mui/material";
import hotelsData from "../data/hotelsData";

export default function HotelDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const hotel = hotelsData.find((h) => String(h.id) === id);

  if (!hotel) return <Typography>Hotel not found.</Typography>;

  return (
    <Box sx={{ p: { xs: 1, md: 4 }, maxWidth: 1200, mx: "auto" }}>
      <Button onClick={() => navigate(-1)} sx={{ mb: 2 }}>
        
      </Button>
      <Typography variant="h5" fontWeight={700} sx={{ mb: 2 }}>
        {hotel.title}
      </Typography>
      <Grid container spacing={2} sx={{ mb: 2 }}>
        <Grid item xs={12} md={7}>
          <CardMedia
            component="img"
            image={hotel.images?.[0] || hotel.img}
            alt={hotel.title}
            sx={{ borderRadius: 3, height: 340, objectFit: "cover" }}
          />
        </Grid>
        <Grid item xs={12} md={5}>
          <Grid container spacing={1}>
            {hotel.images?.slice(1, 7).map((img, idx) => (
              <Grid item xs={6} key={idx}>
                <CardMedia
                  component="img"
                  image={img}
                  alt={`hotel-img-${idx}`}
                  sx={{ borderRadius: 2, height: 100, objectFit: "cover" }}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
      <Typography variant="subtitle1" sx={{ mb: 1 }}>
        {hotel.description || "No description available."}
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        {hotel.guests || "?"} guests · {hotel.bedrooms || "?"} bedroom ·{" "}
        {hotel.beds || "?"} beds · {hotel.bathrooms || "?"} bathroom
      </Typography>
      <Chip
        label={hotel.tag}
        sx={{
          mb: 2,
          bgcolor: "#fff",
          color: "#333",
          fontWeight: 700,
          fontSize: 13,
        }}
      />
      <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
        <Avatar src={hotel.host?.avatar} />
        <Box>
          <Typography fontWeight={600}>Hosted by {hotel.host?.name}</Typography>
          <Typography variant="body2" color="text.secondary">
            {hotel.host?.superhost && "Superhost · "}
            {hotel.host?.yearsHosting} years hosting
          </Typography>
        </Box>
      </Box>
      <Box sx={{ mb: 2 }}>
        {hotel.highlights?.map((h, i) => (
          <Typography key={i} variant="body2" sx={{ mb: 0.5 }}>
            • {h}
          </Typography>
        ))}
      </Box>
      <Box
        sx={{ mt: 3, p: 3, borderRadius: 3, bgcolor: "#fafafa", maxWidth: 350, mx: "right" }}
      >
        <Typography variant="h6" fontWeight={700}>
          {hotel.price}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
          {hotel.rating} ★ · {hotel.reviews} Reviews
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate(`/booking/${id}`)}
          fullWidth
        >
          Reserve
        </Button>
      </Box>
    </Box>
  );
}
