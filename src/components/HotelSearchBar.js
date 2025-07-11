import React, { useState } from "react";
import {
  Box,
  TextField,
  Divider,
  IconButton,
  Typography,
  Popover,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import GuestSelector from "./GuestSelector";

export default function HotelSearchBar({ search, setSearch, onSearch }) {
  const [anchorEl, setAnchorEl] = useState(null);

  // Guests state is an object: { adults: 0, children: 0, infants: 0, pets: 0 }
  const guests = search.guests || {
    adults: 0,
    children: 0,
    infants: 0,
    pets: 0,
  };
  const totalGuests =
    guests.adults + guests.children + guests.infants + guests.pets;

  const handleGuestClick = (event) => setAnchorEl(event.currentTarget);
  const handleGuestClose = () => setAnchorEl(null);

  const handleGuestsChange = (newGuests) => {
    setSearch((s) => ({ ...s, guests: newGuests }));
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        bgcolor: "#fff",
        borderRadius: "40px",
        boxShadow: "0 2px 16px #0001",
        px: 2,
        py: 1,
        width: "100%",
        maxWidth: 700,
        mx: "auto",
        mt: 3,
        position: "sticky",
        top: 70,
        zIndex: 1201,
      }}
    >
      <Box sx={{ flex: 1 }}>
        <Typography variant="subtitle2" fontWeight={700}>
          Where
        </Typography>
        <TextField
          variant="standard"
          placeholder="Search destinations"
          value={search.destination}
          onChange={(e) =>
            setSearch((s) => ({ ...s, destination: e.target.value }))
          }
          InputProps={{ disableUnderline: true }}
          sx={{ width: "100%" }}
        />
      </Box>
      <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />
      <Box sx={{ flex: 1 }}>
        <Typography variant="subtitle2" fontWeight={700}>
          Check in
        </Typography>
        <TextField
          variant="standard"
          placeholder="Add dates"
          type="date"
          value={search.checkIn}
          onChange={(e) =>
            setSearch((s) => ({ ...s, checkIn: e.target.value }))
          }
          InputProps={{ disableUnderline: true }}
          sx={{ width: "100%" }}
          InputLabelProps={{ shrink: true }}
        />
      </Box>
      <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />
      <Box sx={{ flex: 1 }}>
        <Typography variant="subtitle2" fontWeight={700}>
          Check out
        </Typography>
        <TextField
          variant="standard"
          placeholder="Add dates"
          type="date"
          value={search.checkOut}
          onChange={(e) =>
            setSearch((s) => ({ ...s, checkOut: e.target.value }))
          }
          InputProps={{ disableUnderline: true }}
          sx={{ width: "100%" }}
          InputLabelProps={{ shrink: true }}
        />
      </Box>
      <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />
      <Box sx={{ flex: 1 }}>
        <Typography variant="subtitle2" fontWeight={700}>
          Who
        </Typography>
        <TextField
          variant="standard"
          placeholder="Add guests"
          value={
            totalGuests > 0
              ? `${totalGuests} guest${totalGuests > 1 ? "s" : ""}`
              : ""
          }
          onClick={handleGuestClick}
          InputProps={{ disableUnderline: true, readOnly: true }}
          sx={{ width: "100%", cursor: "pointer" }}
        />
        <Popover
          open={Boolean(anchorEl)}
          anchorEl={anchorEl}
          onClose={handleGuestClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        >
          <GuestSelector guests={guests} setGuests={handleGuestsChange} />
        </Popover>
      </Box>
      <IconButton
        sx={{
          bgcolor: "#ff385c",
          color: "#fff",
          ml: 2,
          width: 48,
          height: 48,
          "&:hover": { bgcolor: "#e11d48" },
          boxShadow: "0 2px 8px #ff385c33",
        }}
        onClick={onSearch}
      >
        <SearchIcon />
      </IconButton>
    </Box>
  );
}
