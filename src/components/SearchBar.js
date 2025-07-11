import React from "react";
import { Box, TextField, Button, Grid } from "@mui/material";

function SearchBar({ onSearch }) {
  return (
    <Box sx={{ mb: 4 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <TextField fullWidth label="Destination" variant="outlined" />
        </Grid>
        <Grid item xs={6} sm={3}>
          <TextField
            fullWidth
            label="Check-in"
            type="date"
            InputLabelProps={{ shrink: true }}
          />
        </Grid>
        <Grid item xs={6} sm={3}>
          <TextField
            fullWidth
            label="Check-out"
            type="date"
            InputLabelProps={{ shrink: true }}
          />
        </Grid>
        <Grid item xs={12} sm={2}>
          <Button fullWidth variant="contained" color="primary" sx={{ height: "100%" }}>
            Search
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default SearchBar;