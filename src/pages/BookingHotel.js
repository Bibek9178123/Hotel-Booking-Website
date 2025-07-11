import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  Divider,
  Grid,
  Avatar,
  IconButton,
} from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import GroupIcon from "@mui/icons-material/Group";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import EmailIcon from "@mui/icons-material/Email";
import PersonIcon from "@mui/icons-material/Person";

function BookingHotel() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [guests, setGuests] = React.useState({
    adults: 1,
    children: 0,
    infants: 0,
    pets: 0,
  });
  const [guestSelectorOpen, setGuestSelectorOpen] = React.useState(false);

  const handleGuestChange = (type, delta) => {
    setGuests((prev) => ({
      ...prev,
      [type]: Math.max(0, prev[type] + delta),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/payment");
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 6, mb: 6 }}>
      <Paper
        elevation={6}
        sx={{
          p: { xs: 2, md: 4 },
          minWidth: 350,
          maxWidth: 500,
          borderRadius: 6,
          boxShadow: "0 8px 32px #764ba233",
          background: "linear-gradient(135deg, #fff 60%, #f3e8ff 100%)",
        }}
      >
        {/* Banner Image */}
        <Box
          sx={{
            height: 180,
            width: "100%",
            borderRadius: 4,
            mb: 3,
            background:
              "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80') center/cover",
            boxShadow: 3,
          }}
        />
        <Typography variant="h5" fontWeight={700} gutterBottom align="center">
          Book Your Stay With HotelBay
        </Typography>
        <Typography
          variant="subtitle1"
          color="text.secondary"
          align="center"
          sx={{ mb: 2 }}
        >
          Secure your reservation in just a few steps!
        </Typography>
        <Divider sx={{ mb: 3 }} />
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Avatar sx={{ bgcolor: "#764ba2", width: 32, height: 32 }}>
                  <PersonIcon />
                </Avatar>
                <TextField
                  label="Full Name"
                  name="name"
                  fullWidth
                  required
                  variant="outlined"
                />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Avatar sx={{ bgcolor: "#e1bee7", width: 32, height: 32 }}>
                  <EmailIcon />
                </Avatar>
                <TextField
                  label="Email"
                  name="email"
                  type="email"
                  fullWidth
                  required
                  variant="outlined"
                />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Avatar sx={{ bgcolor: "#f3e8ff", width: 32, height: 32 }}>
                  <PhoneIphoneIcon sx={{ color: "#764ba2" }} />
                </Avatar>
                <TextField
                  label="Phone"
                  name="phone"
                  fullWidth
                  required
                  variant="outlined"
                />
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <CalendarMonthIcon color="primary" />
                <TextField
                  label="Check-in"
                  name="checkin"
                  type="date"
                  fullWidth
                  required
                  InputLabelProps={{ shrink: true }}
                  variant="outlined"
                />
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <CalendarMonthIcon color="secondary" />
                <TextField
                  label="Check-out"
                  name="checkout"
                  type="date"
                  fullWidth
                  required
                  InputLabelProps={{ shrink: true }}
                  variant="outlined"
                />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box sx={{ mb: 2, position: "relative" }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <GroupIcon color="action" />
                  <TextField
                    label="Guests"
                    name="guests"
                    value={
                      guests.adults +
                      guests.children +
                      guests.infants +
                      guests.pets
                    }
                    onClick={() => setGuestSelectorOpen(true)}
                    fullWidth
                    required
                    InputProps={{ readOnly: true }}
                  />
                </Box>
                {guestSelectorOpen && (
                  <Paper
                    elevation={4}
                    sx={{
                      position: "absolute",
                      zIndex: 10,
                      mt: 1,
                      p: 2,
                      minWidth: 300,
                      left: 0,
                      right: 0,
                    }}
                  >
                    {[
                      {
                        label: "Adults",
                        sub: "Ages 13 or above",
                        type: "adults",
                      },
                      { label: "Children", sub: "Ages 2–12", type: "children" },
                      { label: "Infants", sub: "Under 2", type: "infants" },
                      {
                        label: "Pets",
                        sub: "Bringing a service animal?",
                        type: "pets",
                      },
                    ].map((item) => (
                      <Box
                        key={item.type}
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          mb: 2,
                        }}
                      >
                        <Box>
                          <Typography fontWeight={600}>{item.label}</Typography>
                          <Typography variant="caption" color="text.secondary">
                            {item.sub}
                          </Typography>
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 1,
                          }}
                        >
                          <Button
                            size="small"
                            variant="outlined"
                            onClick={() => handleGuestChange(item.type, -1)}
                            disabled={guests[item.type] === 0}
                            sx={{ minWidth: 32, px: 0 }}
                          >
                            –
                          </Button>
                          <Typography sx={{ width: 20, textAlign: "center" }}>
                            {guests[item.type]}
                          </Typography>
                          <Button
                            size="small"
                            variant="outlined"
                            onClick={() => handleGuestChange(item.type, 1)}
                            sx={{ minWidth: 32, px: 0 }}
                          >
                            +
                          </Button>
                        </Box>
                      </Box>
                    ))}
                    <Button
                      variant="contained"
                      color="primary"
                      fullWidth
                      onClick={() => setGuestSelectorOpen(false)}
                      sx={{ mt: 1 }}
                    >
                      Done
                    </Button>
                  </Paper>
                )}
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{
                  fontWeight: 700,
                  fontSize: 18,
                  py: 1.5,
                  mt: 2,
                  background:
                    "linear-gradient(90deg, #764ba2 0%, #667eea 100%)",
                  boxShadow: "0 2px 8px #764ba233",
                  letterSpacing: 1,
                }}
              >
                Confirm Booking
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Box>
  );
}

export default BookingHotel;
