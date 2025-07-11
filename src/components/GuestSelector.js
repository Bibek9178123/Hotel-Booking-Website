import React from "react";
import { Box, Typography, IconButton, Divider, Link } from "@mui/material";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const guestTypes = [
  { key: "adults", label: "Adults", sub: "Ages 13 or above" },
  { key: "children", label: "Children", sub: "Ages 2–12" },
  { key: "infants", label: "Infants", sub: "Under 2" },
  { key: "pets", label: "Pets", sub: <Link href="#" underline="hover">Bringing a service animal?</Link> },
];

export default function GuestSelector({ guests, setGuests }) {
  const handleChange = (key, delta) => {
    setGuests({
      ...guests,
      [key]: Math.max(0, (guests[key] || 0) + delta),
    });
  };

  return (
    <Box sx={{ width: 340, p: 3 }}>
      {guestTypes.map((type, idx) => (
        <React.Fragment key={type.key}>
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 2 }}>
            <Box>
              <Typography fontWeight={600}>{type.label}</Typography>
              <Typography variant="body2" color="text.secondary">{type.sub}</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <IconButton
                onClick={() => handleChange(type.key, -1)}
                disabled={guests[type.key] === 0}
                size="small"
              >
                <RemoveCircleOutlineIcon />
              </IconButton>
              <Typography>{guests[type.key] || 0}</Typography>
              <IconButton
                onClick={() => handleChange(type.key, 1)}
                size="small"
              >
                <AddCircleOutlineIcon />
              </IconButton>
            </Box>
          </Box>
          {idx < guestTypes.length - 1 && <Divider sx={{ mb: 2 }} />}
        </React.Fragment>
      ))}
    </Box>
  );
}