import React, { useEffect, useState } from "react";
import {
  Paper,
  Typography,
  Box,
  Avatar,
  CircularProgress,
  Alert,
  Divider,
  Button,
  Grid,
  TextField,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import FavoriteIcon from "@mui/icons-material/Favorite";
import hotelsData from "../data/hotelsData";

function Profile() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [edit, setEdit] = useState(false);
  const [form, setForm] = useState({});
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    fetch("http://localhost:5000/api/profile", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        setProfile(data);
        setForm({
          name: data.name || "",
          phone: data.phone || "",
          address: data.address || "",
          dob: data.dob || "",
        });
        setLoading(false);
      })
      .catch(() => {
        setProfile({ error: "Failed to load profile" });
        setLoading(false);
      });
  }, [success]);

  const handleEdit = () => setEdit(true);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    setError("");
    setSuccess("");
    const token = localStorage.getItem("token");
    try {
      const res = await fetch("http://localhost:5000/api/profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        credentials: "include",
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.error) {
        setError(data.error);
      } else {
        setSuccess("Profile updated successfully!");
        setProfile(data);
        setEdit(false);
      }
    } catch {
      setError("Failed to update profile");
    }
  };

  const favoriteHotels = hotelsData.filter((h) =>
    profile?.favorites?.includes(h.id)
  );

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", mt: 8 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (profile?.error) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", mt: 8 }}>
        <Alert severity="error">{profile.error}</Alert>
      </Box>
    );
  }

  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 8 }}>
      <Paper
        elevation={0}
        sx={{
          p: 5,
          minWidth: 350,
          maxWidth: 480,
          borderRadius: 4,
          background: "linear-gradient(135deg, #f3e8ff 0%, #e1bee7 100%)",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mb: 2,
          }}
        >
          <Avatar
            sx={{
              width: 100,
              height: 100,
              mb: 2,
              bgcolor: "#764ba2",
              fontSize: 44,
              boxShadow: "0 4px 16px #764ba255",
            }}
            src="/user-avatar.png"
          >
            {profile.name ? profile.name[0].toUpperCase() : ""}
          </Avatar>
          {edit ? (
            <TextField
              name="name"
              label="Name"
              value={form.name}
              onChange={handleChange}
              fullWidth
              sx={{ mb: 2, maxWidth: 300 }}
            />
          ) : (
            <Typography variant="h4" fontWeight={700} gutterBottom>
              {profile.name}
            </Typography>
          )}
          <Typography color="text.secondary" sx={{ mb: 2 }}>
            {profile.email}
          </Typography>
        </Box>
        <Divider sx={{ my: 2 }} />
        <Grid container spacing={2} sx={{ mb: 2 }}>
          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle2" color="text.secondary">
              Phone
            </Typography>
            {edit ? (
              <TextField
                name="phone"
                value={form.phone}
                onChange={handleChange}
                fullWidth
                size="small"
              />
            ) : (
              <Typography variant="body1" fontWeight={500}>
                {profile.phone || "Not set"}
              </Typography>
            )}
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle2" color="text.secondary">
              Address
            </Typography>
            {edit ? (
              <TextField
                name="address"
                value={form.address}
                onChange={handleChange}
                fullWidth
                size="small"
              />
            ) : (
              <Typography variant="body1" fontWeight={500}>
                {profile.address || "Not set"}
              </Typography>
            )}
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle2" color="text.secondary">
              Date of Birth
            </Typography>
            {edit ? (
              <TextField
                name="dob"
                type="date"
                value={form.dob}
                onChange={handleChange}
                fullWidth
                size="small"
                InputLabelProps={{ shrink: true }}
              />
            ) : (
              <Typography variant="body1" fontWeight={500}>
                {profile.dob || "Not set"}
              </Typography>
            )}
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle2" color="text.secondary">
              Total Bookings
            </Typography>
            <Typography variant="body1" fontWeight={500}>
              {profile.totalBooking ?? 0}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle2" color="text.secondary">
              Favorite Hotels
            </Typography>
            <Typography
              variant="body1"
              fontWeight={500}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                flexWrap: "wrap",
              }}
            >
              <FavoriteIcon fontSize="small" color="error" />
              {favoriteHotels.length > 0
                ? favoriteHotels.map((hotel) => hotel.title).join(", ")
                : "No favorite hotels"}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle2" color="text.secondary">
              Joined
            </Typography>
            <Typography
              variant="body1"
              fontWeight={500}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <CalendarMonthIcon fontSize="small" />
              {profile.createdAt
                ? new Date(profile.createdAt).toLocaleDateString()
                : "Unknown"}
            </Typography>
          </Grid>
        </Grid>
        <Divider sx={{ my: 2 }} />
        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}
        {success && (
          <Alert severity="success" sx={{ mb: 2 }}>
            {success}
          </Alert>
        )}
        <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 2 }}>
          {edit ? (
            <>
              <Button
                variant="contained"
                startIcon={<SaveIcon />}
                onClick={handleSave}
              >
                Save
              </Button>
              <Button
                variant="outlined"
                onClick={() => {
                  setEdit(false);
                  setForm({
                    name: profile.name || "",
                    phone: profile.phone || "",
                    address: profile.address || "",
                    dob: profile.dob || "",
                  });
                }}
              >
                Cancel
              </Button>
            </>
          ) : (
            <Button
              variant="contained"
              startIcon={<EditIcon />}
              onClick={handleEdit}
            >
              Edit Profile
            </Button>
          )}
        </Box>
      </Paper>
      {/* <Paper
        elevation={0}
        sx={{
          p: 5,
          mt: 4,
          minWidth: 350,
          maxWidth: 480,
          borderRadius: 4,
          background:
            "linear-gradient(135deg, #e1bee7 0%, #f3e8ff 100%)",
        }}
      > */}
      {/* <Typography variant="h5" fontWeight={700} gutterBottom>
          Your Favorite Hotels
        </Typography>
        <Grid container spacing={2}>
          {favoriteHotels.length > 0 ? (
            favoriteHotels.map((hotel) => (
              <Grid item xs={12} md={4} key={hotel.id}>
                <Card>
                  <CardMedia image={hotel.img} height="140" component="img" />
                  <CardContent>
                    <Typography>{hotel.title}</Typography>
                    <Typography>{hotel.price}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))
          ) : (
            <Grid item xs={12}>
              <Typography variant="body1" color="text.secondary" align="center">
                No favorite hotels found.
              </Typography>
            </Grid>
          )}
    //     </Grid> */}
      {/* //   </Paper> */}
      //{" "}
    </Box>
  );
}

export default Profile;
