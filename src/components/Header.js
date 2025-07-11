import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import HotelIcon from "@mui/icons-material/Hotel";

function Header() {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <HotelIcon sx={{ mr: 2 }} />
        <Typography variant="h6" component="div">

        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;