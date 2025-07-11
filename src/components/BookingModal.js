import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  TextField,
  Grid,
  Box,
  Divider,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

function BookingModal({ hotel, open, onClose, onBookingConfirmed }) {
  const [guestName, setGuestName] = useState("");
  const [email, setEmail] = useState("");
  const [checkIn, setCheckIn] = useState(null);
  const [checkOut, setCheckOut] = useState(null);

  const handleBooking = () => {
    // Add booking logic here (API call, validation, etc.)
    onBookingConfirmed && onBookingConfirmed();
    onClose();
  };

  if (!hotel) return null;

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>
        Book Your Stay at <span style={{ color: "#1976d2" }}>{hotel.name}</span>
      </DialogTitle>
      <DialogContent>
        <Typography variant="subtitle1" color="text.secondary" gutterBottom>
          {hotel.location}
        </Typography>
        <Typography variant="body2" sx={{ mb: 2 }}>
          {hotel.description}
        </Typography>
        <Divider sx={{ mb: 2 }} />
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Guest Name"
                fullWidth
                value={guestName}
                onChange={(e) => setGuestName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Email"
                type="email"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <DatePicker
                label="Check-in"
                value={checkIn}
                onChange={setCheckIn}
                renderInput={(params) => <TextField {...params} fullWidth />}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <DatePicker
                label="Check-out"
                value={checkOut}
                onChange={setCheckOut}
                renderInput={(params) => <TextField {...params} fullWidth />}
              />
            </Grid>
          </Grid>
        </LocalizationProvider>
        <Box sx={{ mt: 3, p: 2, bgcolor: "#f5f6fa", borderRadius: 2 }}>
          <Typography variant="subtitle2">Booking Summary</Typography>
          <Typography variant="body2">
            <strong>Hotel:</strong> {hotel.name}
          </Typography>
          <Typography variant="body2">
            <strong>Price:</strong> ${hotel.price} / night
          </Typography>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">
          Cancel
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={handleBooking}
          disabled={
            !guestName || !email || !checkIn || !checkOut
          }
        >
          Confirm Booking
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default BookingModal;